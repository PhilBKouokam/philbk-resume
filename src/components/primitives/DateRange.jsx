const formatters = new Map()

function getFormatter(locale) {
  if (!formatters.has(locale)) {
    formatters.set(
      locale,
      new Intl.DateTimeFormat(locale, {
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
      }),
    )
  }
  return formatters.get(locale)
}

function formatDate(value, locale) {
  const [year, month] = value.split('-').map(Number)
  return getFormatter(locale).format(new Date(Date.UTC(year, month - 1, 1)))
}

function ResumeDate({ value, locale }) {
  return <time dateTime={value}>{formatDate(value, locale)}</time>
}

export default function DateRange({ date, startDate, endDate, locale, presentLabel }) {
  if (date) return <ResumeDate value={date} locale={locale} />
  if (!startDate) return null

  return (
    <span>
      <ResumeDate value={startDate} locale={locale} />
      {' – '}
      {endDate ? <ResumeDate value={endDate} locale={locale} /> : presentLabel}
    </span>
  )
}
