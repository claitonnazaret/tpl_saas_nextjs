'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import * as _ from 'lodash'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

export default function AppBreadcrumb() {
  const pathname = usePathname()
  const pathnames = pathname.split('/').filter((x) => x && x != 'dashboard')

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          name = _.startCase(name.toLowerCase())
          const isLast = index === pathnames.length - 1
          return (
            <Fragment key={index}>
              <BreadcrumbSeparator className="hidden md:block" />
              {isLast ? (
                <BreadcrumbItem key={name} aria-current="page">
                  <BreadcrumbPage>{name}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem key={name}>
                  <BreadcrumbPage>
                    <Link href={routeTo}>{name}</Link>
                  </BreadcrumbPage>
                  name
                </BreadcrumbItem>
              )}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
