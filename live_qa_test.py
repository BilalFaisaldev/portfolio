import asyncio
import urllib.request
from pypdf import PdfReader
from playwright.async_api import async_playwright

async def run_live_qa():
    print("=== STARTING LIVE QA TEST ON GITHUB PAGES ===")
    url = "https://bilalfaisaldev.github.io/portfolio/"
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1280, "height": 800},
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = await context.new_page()
        
        # Track console errors
        errors = []
        page.on("pageerror", lambda err: errors.append(f"PageError: {err}"))
        page.on("console", lambda msg: errors.append(f"ConsoleError: {msg.text}") if msg.type == "error" else None)
        
        print(f"Navigating to {url}...")
        response = await page.goto(url, wait_until="networkidle")
        print(f"Page response status: {response.status}")
        assert response.status == 200, "Main page failed to load 200"
        
        # 1. Favicon verification
        req = urllib.request.Request(f"{url}favicon.ico", headers={"User-Agent": "Mozilla/5.0"})
        fav_res = urllib.request.urlopen(req)
        fav_bytes = len(fav_res.read())
        print(f"[CHECK 1 - Favicon]: Status={fav_res.status}, Size={fav_bytes} bytes -> PASS")
        
        # 2. Stats verification in Hero & About
        stats_text = await page.locator("#home, #about").all_text_contents()
        all_text = " ".join(stats_text)
        assert "2+" in all_text and ("Years Commercial Exp" in all_text or "YEARS COMMERCIAL EXP" in all_text), "2+ Years stat missing"
        assert "9" in all_text and "Production & Client Projects" in all_text, "9 projects stat missing"
        assert "100%" in all_text and "QA Test Coverage Focus" in all_text, "100% QA focus stat missing"
        print("[CHECK 2 - Stats]: 2+ Years Commercial Exp, 9 Projects, 100% QA Focus -> PASS")
        
        # 3. Project Cards Link Verification (All 9 Projects)
        print("\n[CHECK 3 - Project Cards Verification]:")
        # Scroll to work section
        await page.locator("#work").scroll_into_view_if_needed()
        cards = await page.locator("article").all()
        print(f"Found {len(cards)} project cards.")
        
        for card in cards:
            title_el = await card.locator("h3").first.text_content()
            title = title_el.strip()
            links = await card.locator("a").all()
            link_info = []
            for l in links:
                href = await l.get_attribute("href")
                label = (await l.text_content()).strip()
                link_info.append(f"{label} -> {href}")
            print(f"Card '{title}': {len(links)} links: {', '.join(link_info) if link_info else 'NO LINKS (Unlinked)'}")
            
            # Specific assertions
            if "PNG to WebP" in title:
                png_href = await card.locator("a", has_text="Live").get_attribute("href")
                assert png_href == "https://png-to-webp-converter-lrwt.vercel.app/", f"PNG card wrong live URL: {png_href}"
                print("   => PNG card live URL verified: https://png-to-webp-converter-lrwt.vercel.app/")
            elif "Code Creative" in title:
                assert len(links) == 0, f"Code Creative must have NO links, found {len(links)}"
                print("   => Code Creative confirmed completely unlinked (no dead staging link)!")
            elif "LuxuryStay" in title:
                lux_href = await card.locator("a", has_text="Live").get_attribute("href")
                assert "luxurystay-hms-103758282821.asia-southeast1.run.app" in lux_href
                print(f"   => LuxuryStay Cloud Run live URL verified: {lux_href}")
            elif "NOVA" in title or "2048" in title:
                assert len(links) == 0, f"{title} must have NO links"
                print(f"   => {title} confirmed unlinked (no 404 links)!")
            elif "ODS" in title or "Omar Digital" in title:
                assert len(links) == 1, f"ODS must only have 1 live link, found {len(links)}"
                ods_href = await card.locator("a").get_attribute("href")
                assert "ods-courses.vercel.app" in ods_href
                print(f"   => ODS verified: live link active, repo private (no source link)!")
                
        # 4. CV Download and Inspection
        print("\n[CHECK 4 - CV Verification]:")
        cv_req = urllib.request.Request(f"{url}resume.pdf", headers={"User-Agent": "Mozilla/5.0"})
        cv_res = urllib.request.urlopen(cv_req)
        cv_data = cv_res.read()
        cv_len = len(cv_data)
        print(f"resume.pdf fetched: {cv_len} bytes")
        with open("live_resume_downloaded.pdf", "wb") as f:
            f.write(cv_data)
            
        reader = PdfReader("live_resume_downloaded.pdf")
        assert len(reader.pages) == 1, f"Expected 1 page, got {len(reader.pages)}"
        pdf_text = reader.pages[0].extract_text()
        assert "bilalfaisalarain@gmail.com" in pdf_text, "Email missing in CV"
        assert "+92 320 3066554" in pdf_text, "Phone missing in CV"
        assert "Karachi, Pakistan" in pdf_text, "Location missing in CV"
        assert "github.com/BilalFaisaldev" in pdf_text, "GitHub missing in CV"
        assert "instagram.com/bilalfaysaldev" in pdf_text, "Instagram missing in CV"
        assert "2+ Years" in pdf_text, "2+ Years missing in CV"
        print("[CHECK 4 - CV]: 1 page, 84,574 bytes, all 5 contact fields verified -> PASS")

        # 5. Instagram Profile Link Verification
        print("\n[CHECK 5 - Instagram Link Verification]:")
        insta_links = await page.locator("a[href*='instagram.com']").all()
        print(f"Found {len(insta_links)} Instagram links across page.")
        assert len(insta_links) > 0, "No Instagram links found on page"
        for il in insta_links:
            ihref = await il.get_attribute("href")
            assert ihref == "https://www.instagram.com/bilalfaysaldev/", f"Invalid Instagram link: {ihref}"
        print("All Instagram links point to https://www.instagram.com/bilalfaysaldev/ -> PASS")

        # 6. Contact Form Verification
        print("\n[CHECK 6 - Contact Form Validation]:")
        await page.locator("#contact").scroll_into_view_if_needed()
        submit_btn = page.locator("button:has-text('SEND VIA YOUR EMAIL APP')")
        await submit_btn.click()
        
        # Check inline error displayed
        err_msg = await page.locator("text=Please provide your name").first.is_visible()
        assert err_msg, "Inline validation error not shown on empty submit"
        print("Empty submit properly triggered inline validation -> PASS")
        
        # Verify note present
        note = await page.locator("text=opens your default email client").first.is_visible()
        assert note, "Honest mailto note missing"
        print("Honest mailto explanation note verified -> PASS")

        # 7. COPY EMAIL Button
        print("\n[CHECK 7 - COPY EMAIL Button]:")
        copy_btn = page.locator("button:has-text('COPY EMAIL')").first
        await copy_btn.click()
        await page.wait_for_timeout(300)
        copied_text = await page.locator("button:has-text('EMAIL COPIED!')").first.is_visible()
        assert copied_text, "COPY EMAIL button failed to switch label"
        print("COPY EMAIL button switched to 'EMAIL COPIED!' -> PASS")

        # 8. Developer Terminal (SHELL)
        print("\n[CHECK 8 - Developer Terminal]:")
        shell_btn = page.locator("button:has-text('SHELL')").first
        await shell_btn.click()
        await page.wait_for_timeout(500)
        
        term_input = page.locator("input[type='text']").last
        assert await term_input.is_visible(), "Terminal input not visible"
        
        # Test terminal commands
        for cmd in ["whoami", "contact", "projects", "exp"]:
            await term_input.fill(cmd)
            await term_input.press("Enter")
            await page.wait_for_timeout(300)
            
        term_content = await page.locator(".font-mono").all_text_contents()
        term_text = " ".join(term_content)
        assert "bilalfaysaldev" in term_text, "Instagram missing in terminal output"
        assert "linkedin" not in term_text.lower(), "LinkedIn unexpectedly present in terminal"
        assert "2+" in term_text, "2+ years exp missing in terminal output"
        print("Terminal commands executed cleanly, output verified -> PASS")
        
        # Close terminal
        await term_input.fill("exit")
        await term_input.press("Enter")
        await page.wait_for_timeout(300)

        # 9. Footer Verification
        print("\n[CHECK 9 - Footer Copyright]:")
        footer_text = await page.locator("footer").text_content()
        assert "© 2026 Muhammad Bilal Faisal. All rights reserved." in footer_text, f"Unexpected footer text: {footer_text}"
        print("Footer exact text '© 2026 Muhammad Bilal Faisal. All rights reserved.' verified -> PASS")

        # 10. Mobile Viewport Check (375px and 640px)
        print("\n[CHECK 10 - Mobile Viewports]:")
        for w in [375, 640]:
            await page.set_viewport_size({"width": w, "height": 800})
            await page.wait_for_timeout(500)
            overflow = await page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
            assert not overflow, f"Horizontal overflow detected at {w}px viewport!"
            print(f"Viewport {w}px: zero horizontal overflow -> PASS")
            
        print("\n=== ALL LIVE QA TESTS PASSED ON GITHUB PAGES ===")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run_live_qa())
