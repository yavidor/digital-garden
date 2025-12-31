import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

type Options = {
  text: string
}

export default ((opts?: Options) => {
  const Announcement: QuartzComponent = ({ cfg }): QuartzComponentProps => {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
  return Announcement
}) satisfies QuartzComponentConstructor
