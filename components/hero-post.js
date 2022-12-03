import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div>
        <div>
          <h3 className="mb-4 text-2xl lg:text-2xl leading-tight">
            <Link className="hover:underline" href={`/posts/${slug}`}>
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-md">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-md leading-relaxed mb-4 md:mb-0">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  )
}
