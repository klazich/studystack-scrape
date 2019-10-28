import axios from 'axios'
import cheerio from 'cheerio'

const fetchData = async url => {
  const response = await axios.get(url)
  return cheerio.load(response.data)
}

const url = 'https://www.studystack.com/flashcard-1018288'
const fn = $ =>
  $('tr', '#theTable').each((i, e) => {
    const row = $(e).children()
    const front = row
      .first()
      .text()
      .trim()
    const back = row
      .last()
      .text()
      .trim()

    console.log(front)
    console.log(back)

  })

const parse = url => async fn => fn(await fetchData(url))
