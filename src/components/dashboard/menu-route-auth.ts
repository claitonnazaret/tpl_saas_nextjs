import { urlDashboard } from '@/lib/utils'
import { Home, PenSquare, UserPen, Users, WalletCards } from 'lucide-react'

export type SubMenuItemProps = {
  title: string
  url: string
  icon: React.FC
  role?: 'admin' | undefined
}

export type MenuItemProps = {
  title: string
  icon: React.FC
  url?: string
  role?: 'admin' | undefined
  submenus?: SubMenuItemProps[]
}

const menuCadastros: MenuItemProps = {
  title: 'Cadastros',
  icon: PenSquare,
  submenus: [
    {
      title: 'Usuários',
      url: urlDashboard('/users'),
      icon: Users,
      role: 'admin',
    },
    {
      title: 'Clientes',
      url: urlDashboard('/users'),
      icon: UserPen,
    },
    {
      title: 'Produtos',
      url: urlDashboard('/products'),
      icon: WalletCards,
    },
  ],
}

const fullMenus: MenuItemProps[] = [
  { title: 'Dashboard', url: urlDashboard(), icon: Home },
  { ...menuCadastros },
]

export function getMenus(roles: string[]) {
  const isAdmin = roles.includes('admin')

  function filterMenus(menu: MenuItemProps): boolean {
    if (!menu.role || isAdmin || menu.role !== 'admin') {
      if (menu.submenus) {
        menu.submenus = menu.submenus.filter(filterMenus)
      }
      return true
    }
    return false
  }

  return fullMenus.filter(filterMenus)
}
