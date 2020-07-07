/**
 * @file Types
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

export type Plugin = {
    name: string
    func: Function
}

export type Options = {
    node: string
    chain: string
    plugins?: Plugin[]
}
