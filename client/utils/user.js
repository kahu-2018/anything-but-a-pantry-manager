import { get, set, remove } from './localstorage'


export function saveUserProfile(profile) {
    console.log('saveUserProfile: ', profile)
    if (profile) {
        set('pf_first_name', profile.first_name)
        set('pf_last_name', profile.last_name)
        set('pf_dietary_restrictions', profile.dietary_restrictions)
        set('pf_image', profile.image)
    }
}

export function getLocalUserProfile() {
    let profile = {}
    let firstName = get('pf_first_name')
    let lastName = get('pf_last_name')
    let dietRestrictions = get('pf_dietary_restrictions')
    let image = get('pf_image')
    if (firstName) {
        profile.first_name = firstName,
        profile.last_name = lastName,
        profile.dietary_restrictions = dietRestrictions
        profile.image = image
    }
    console.log('getLocalUserProfile: ', profile)
    return profile
}

export function removeUserProfile() {
    remove('pf_first_name')
    remove('pf_last_name')
    remove('pf_dietary_restrictions')
    remove('pf_image')
}