import Role from "../../src/structures/Role.ts"
import Guild from "../../src/structures/Guild.ts"

export default interface GuildUserOptions {
    id: string 
    username: string 
    tag: string
    avatar: string 
    bot: boolean 
    system?: boolean
    mfaEnabled?: boolean
    locale?: string
    email?: string
    verified?: boolean
    flags?: number
    premiumType?: number
    publicFlags?: number
    nickname: string
    roles: Array<Role>
    joinedAt: string
    boostingSince: string
    deaf: boolean
    mute: boolean
    pending?: boolean
    permissions?: string
    guild: Guild
}