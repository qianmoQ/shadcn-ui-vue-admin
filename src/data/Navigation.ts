import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import NavigationService from '@/services/Navigation'
import { Ban, Home, LogIn, LogOut, StickyNote } from 'lucide-vue-next'

const createNavigation = (): void => {
    NavigationService.addNavigation(createNavigationItem('common.common.home', undefined, '/home', Home, NavigationPosition.LEFT_TOP))
    const signIn = createNavigationItem('common.common.signIn', undefined, '/auth/signin', LogIn, NavigationPosition.LEFT_TOP)
    NavigationService.addNavigation(signIn)
    const signUp = createNavigationItem('common.common.signUp', undefined, '/auth/signup', LogOut, NavigationPosition.LEFT_BOTTOM)
    NavigationService.addNavigation(signUp)
    NavigationService.addNavigation(createNavigationItem('common.common.home',
        undefined,
        '/home',
        undefined,
        NavigationPosition.TOP,
        [],
        'common.common.home',
        undefined))

    const datacap = createNavigationItem('common.common.datacap',
        undefined,
        'https://datacap.edurt.io',
        undefined,
        NavigationPosition.TOP,
        undefined
        , undefined,
        'common.tip.datacap',
        true)
    const openProject = createNavigationItem('common.common.openProject',
        undefined,
        '/open-project',
        undefined,
        NavigationPosition.TOP,
        [datacap],
        'common.common.openProject')
    NavigationService.addNavigation(openProject)

    const page404 = createNavigationItem('common.common.page404', undefined, '/common/404', Ban, NavigationPosition.LEFT_TOP)
    const pages = createNavigationItem('common.common.page', undefined, '/pages', StickyNote,
        NavigationPosition.LEFT_TOP, [page404], undefined, 'common.common.page')
    NavigationService.addNavigation(pages)
}

const createNavigationItem = (title?: string, label?: string, href?: string, icon?: any, position?: NavigationPosition, children?: NavigationModel[], group?: string, description?: string, blank?: boolean): NavigationModel => {
    return {
        title: title,
        label: label,
        href: href,
        icon: icon,
        position: position,
        group: group,
        description: description,
        children: children,
        external: blank
    }
}

export {
    createNavigation
}
