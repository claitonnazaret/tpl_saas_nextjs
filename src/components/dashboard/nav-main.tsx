import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { compositeKey } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { Fragment } from 'react'
import { getMenus, MenuItemProps } from './menu-route-auth'

export function NavMain() {
  const { data } = useSession()
  const roles = data?.user?.roles || ['client']
  const menus: MenuItemProps[] = getMenus(roles)

  return (
    <SidebarContent>
      {menus.map((menu, index) => (
        <Fragment key={compositeKey(menu, index)}>
          {menu.url ? (
            <SidebarMenuButton asChild key={compositeKey(menu.title, index)}>
              <a href={menu.url}>
                {menu.icon ? <menu.icon /> : <></>}
                <span>{menu.title}</span>
              </a>
            </SidebarMenuButton>
          ) : (
            <SidebarMenu>
              <Collapsible
                key={compositeKey(menu.title, index.toString())}
                asChild
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={menu.title}>
                      {menu.icon && <menu.icon />}
                      <span>{menu.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {menu.submenus?.map((subMenu, index) => (
                        <SidebarMenuSubItem
                          key={compositeKey(subMenu.title, index.toString())}
                        >
                          <SidebarMenuSubButton asChild>
                            <a href={subMenu.url}>
                              {subMenu.icon && <subMenu.icon />}
                              <span>{subMenu.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          )}
        </Fragment>
      ))}
    </SidebarContent>
  )
}
