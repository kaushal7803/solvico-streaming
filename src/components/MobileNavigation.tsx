"use client"

import { useState } from "react"
import {
  HomeIcon,
  MagnifyingGlassIcon,
  TvIcon,
  TrashIcon,
  Cog6ToothIcon,
  PlayIcon,
  CircleStackIcon,
  ClockIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

const sidebarItems = [
  { icon: HomeIcon, active: true, label: "Home" },
  { icon: MagnifyingGlassIcon, active: false, label: "Search" },
  { icon: TvIcon, active: false, label: "TV Shows" },
  { icon: TrashIcon, active: false, label: "Trash" },
  { icon: Cog6ToothIcon, active: false, label: "Settings" },
  { icon: PlayIcon, active: false, label: "Play" },
  { icon: CircleStackIcon, active: false, label: "Library" },
  { icon: ClockIcon, active: false, label: "History" },
]

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XMarkIcon className="w-6 h-6 text-white" /> : <Bars3Icon className="w-6 h-6 text-white" />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed left-0 top-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 pt-16">
          {/* Logo */}
          <div className="mb-8 flex items-center">
            <svg className="w-8 h-8 text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-xl font-bold text-white">StreamApp</span>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col space-y-4">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  item.active ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-6 h-6 mr-3" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
