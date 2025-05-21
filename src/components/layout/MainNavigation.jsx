import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Container from '../ui/Container'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Internet', href: '#', current: false },
  { name: 'Business', href: '#', current: false },
  { name: 'Coverage', href: '#', current: false },
  { name: 'Support', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainNavigation() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 px-4 py-4"
    >
      <div className="backdrop-blur-md bg-blue-200/15 rounded-2xl shadow-lg">
        <Container>
          <div className="relative flex h-16 items-center">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6 group-data-open:hidden" aria-hidden="true" />
                <XMarkIcon className="hidden h-6 w-6 group-data-open:block" aria-hidden="true" />
              </DisclosureButton>
            </div>

            {/* Logo + desktop links */}
            <div className="flex flex-1 items-center justify-between">
              <div className="flex shrink-0 items-center">
                <span className="text-white text-xl mr-8 font-thin tracking-wider">
                  WAVECOMM
                </span>
              </div>
              <div className="hidden sm:block flex-1">
                <div className="flex justify-center space-x-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white',
                        'rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile panel */}
      <DisclosurePanel className="sm:hidden mt-2">
        <div className="backdrop-blur-md bg-black/20 rounded-xl border border-white/10 shadow-lg">
          <Container>
            <div className="space-y-1 py-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white',
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </Container>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
