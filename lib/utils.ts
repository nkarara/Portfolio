import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper to get the correct image path for GitHub Pages
export function getImagePath(path: string) {
  return `/Portfolio${path}`
}

// Helper to get the correct navigation path for GitHub Pages
export function getNavPath(path: string) {
  return `/Portfolio${path}`
}
