import test, { expect } from '@playwright/test'
import { defaultTasks } from '../src/pages/Tasks'

const CLIENT_URL = process.env.VITE_CLIENT_URL || 'http://localhost:5173'

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

test('should add a new task', async ({ page }) => {
	await page.goto(CLIENT_URL, { waitUntil: 'domcontentloaded' })
	const inputField = page.getByPlaceholder('Сходить за покупками')
	const addButton = page.getByRole('button', { name: 'Добавить' })

	await inputField.fill('Задача 7')
	await addButton.click()

	const newTask = page.getByText('Задача 7')
	await expect(newTask).toBeVisible()
})

test('should remove a task', async ({ page }) => {
	await page.goto(CLIENT_URL, { waitUntil: 'domcontentloaded' })
	const deleteButton = page.getByTestId('remove-task').first()

	await deleteButton.click()

	const task = page.getByText('Задача 1')
	await expect(task).not.toBeVisible()
})

test('should add task when pressing Enter', async ({ page }) => {
	await page.goto(CLIENT_URL, { waitUntil: 'domcontentloaded' })
	const inputField = page.getByPlaceholder('Сходить за покупками')

	await inputField.fill('Задача 9')
	await inputField.press('Enter')

	const task = page.getByText('Задача 9')
	await expect(task).toBeVisible()
})

test('should display empty task list', async ({ page }) => {
	await page.goto(CLIENT_URL, { waitUntil: 'domcontentloaded' })

	for (let i = 0; i < defaultTasks.length; i++) {
		await page.getByTestId('remove-task').nth(0).click()
		// Анимация длится 200мс
		await delay(200)
	}

	const nonExitTask = page.getByText('Задача ').first()
	await expect(nonExitTask).not.toBeVisible()
})

test('should not add task with empty input', async ({ page }) => {
	await page.goto(CLIENT_URL, { waitUntil: 'domcontentloaded' })
	const inputField = page.getByPlaceholder('Сходить за покупками')
	const addButton = page.getByRole('button', { name: 'Добавить' })

	await inputField.fill('')
	await addButton.click()

	const tasks = await page.getByTestId('task').count()
	expect(tasks).toBe(defaultTasks.length)
})
