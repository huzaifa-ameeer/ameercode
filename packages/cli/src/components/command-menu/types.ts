import type { ToastContextValue } from "../../providers/toast"

export type CommandContext = {
    exit : ()=>void
    toast: ToastContextValue
}

export type Command = {
    name : String,
    description: String,
    value: String
    action?: (ctx: CommandContext) =>void | Promise<void>
}