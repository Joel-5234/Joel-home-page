// Playwright UI tests for Joel's Personal Website
// These tests check that the website works correctly

const { test, expect } = require('@playwright/test');

// Test that the page loads and has the correct title
test('page loads with correct title', async ({ page }) => {
  await page.goto('http://localhost:8000');
  await expect(page).toHaveTitle(/Joel Lopez/);
});

// Test that navigation links work
test('navigation links scroll to sections', async ({ page }) => {
  await page.goto('http://localhost:8000');
  
  // Click on the About link
  await page.click('a[href="#about"]');
  await page.waitForTimeout(500); // Wait for smooth scroll
  
  // Check that we're at the about section
  const aboutSection = await page.locator('#about');
  await expect(aboutSection).toBeVisible();
});

// Test that "View My Projects" button works
test('View My Projects button scrolls to projects section', async ({ page }) => {
  await page.goto('http://localhost:8000');
  
  // Click the View My Projects button
  await page.click('a.btn-primary[href="#projects"]');
  await page.waitForTimeout(500);
  
  // Check that projects section is visible
  const projectsSection = await page.locator('#projects');
  await expect(projectsSection).toBeVisible();
});

// Test responsive design on mobile
test('site is responsive on mobile', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:8000');
  
  // Check that hero section is visible
  const hero = await page.locator('.hero');
  await expect(hero).toBeVisible();
  
  // Check that navigation is visible
  const navbar = await page.locator('#navbar');
  await expect(navbar).toBeVisible();
});

// Test that all sections are present
test('all required sections are present', async ({ page }) => {
  await page.goto('http://localhost:8000');
  
  const sections = ['home', 'about', 'majors', 'projects', 'skills', 'videos', 'contact'];
  
  for (const sectionId of sections) {
    const section = await page.locator(`#${sectionId}`);
    await expect(section).toBeVisible();
  }
});

// Test that project cards are displayed
test('project cards are displayed', async ({ page }) => {
  await page.goto('http://localhost:8000');
  
  // Scroll to projects section
  await page.click('a[href="#projects"]');
  await page.waitForTimeout(500);
  
  // Check that there are 3 project cards
  const projectCards = await page.locator('.project-card');
  await expect(projectCards).toHaveCount(3);
});

// Test back to top button appears after scrolling
test('back to top button appears after scrolling', async ({ page }) => {
  await page.goto('http://localhost:8000');
  
  // Initially, button should not be visible
  const backToTop = await page.locator('#back-to-top');
  await expect(backToTop).not.toHaveClass(/visible/);
  
  // Scroll down
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(300);
  
  // Button should now be visible
  await expect(backToTop).toHaveClass(/visible/);
  
  // Click back to top
  await backToTop.click();
  await page.waitForTimeout(500);
  
  // Should be at top of page
  const scrollY = await page.evaluate(() => window.scrollY);
  expect(scrollY).toBeLessThan(100);
});

// Test contact email link
test('contact email link is clickable', async ({ page }) => {
  await page.goto('http://localhost:8000');
  
  // Scroll to contact section
  await page.click('a[href="#contact"]');
  await page.waitForTimeout(500);
  
  // Check that email link exists and has mailto:
  const emailLink = await page.locator('a[href^="mailto:"]');
  await expect(emailLink).toBeVisible();
  const href = await emailLink.getAttribute('href');
  expect(href).toContain('mailto:');
});

