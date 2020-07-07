import { parseISO, format } from 'date-fns'

export default function Date({ dateString, ...args }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString} {...args}>{format(date, 'LLLL d, yyyy')}</time>
}
