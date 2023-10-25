import type { ComponentObjectPropsOptions } from 'vue'

export const noop = () => {}

export interface DefaultProps {
  rootClassName?: string
}

export const getDefaultProps: () => ComponentObjectPropsOptions<DefaultProps> = () => ({
  rootClassName: { type: String, default: '' }
})
