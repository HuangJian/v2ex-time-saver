// ==UserScript==
// @name         lizhi-fm-web-ui
// @namespace    https://github.com/HuangJian/grease-monkey-scripts
// @version      0.01
// @description  Nice lizhi.fm web ui, with player, indexing and searching.
// @author       ustc.hj@gmail.com
// @match        https://www.lizhi.fm/user/*
// @icon         https://www.lizhi.fm/assets/images/7e999851b414e3618f538e52561987a9-favicon.ico
// @require      https://cdn.tailwindcss.com/3.0.12
// @grant        GM_addStyle
// @grant        GM.setValue
// @grant        GM.getValue
// ==/UserScript==

(async function() {
  'use strict';
  const crawlerSvg = `
    <svg xml:space="preserve" viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1"
    version="1.1" style="height: 100%; width: 100%; background: rgb(255, 255, 255);" width="200px" height="200px">
    <g class="ldl-scale stop-animation" style="transform-origin: 50% 50%; transform: rotate(0deg) scale(0.8, 0.8);">
        <g class="ldl-ani">
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.611111s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <path d="M55.955 33.547l15.509-11.494V10" stroke-miterlimit="10" stroke-width="3.5"
                        stroke-linecap="round" stroke="#333" fill="none" style="stroke: rgb(51, 51, 51);"></path>
                </g>
            </g>
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.666667s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <path d="M54.708 40.136l25.111-4.605 3.97-18.094" stroke-miterlimit="10" stroke-width="3.5"
                        stroke-linecap="round" stroke="#333" fill="none" style="stroke: rgb(51, 51, 51);"></path>
                </g>
            </g>
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.722222s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <path d="M58.216 49.01l22.157 2.031 7.57 16.987" stroke-miterlimit="10" stroke-width="3.5"
                        stroke-linecap="round" stroke="#333" fill="none" style="stroke: rgb(51, 51, 51);"></path>
                </g>
            </g>
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.777778s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <path d="M58.216 60.273l20.126 14.956L74.188 90" stroke-miterlimit="10" stroke-width="3.5"
                        stroke-linecap="round" stroke="#333" fill="none" style="stroke: rgb(51, 51, 51);"></path>
                </g>
            </g>
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.833333s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <path d="M44.045 33.547L28.536 22.053V10" stroke-miterlimit="10" stroke-width="3.5"
                        stroke-linecap="round" stroke="#333" fill="none" style="stroke: rgb(51, 51, 51);"></path>
                </g>
            </g>
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.888889s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <path d="M45.292 40.136l-25.111-4.605-3.97-18.094" stroke-miterlimit="10" stroke-width="3.5"
                        stroke-linecap="round" stroke="#333" fill="none" style="stroke: rgb(51, 51, 51);"></path>
                </g>
            </g>
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.944444s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <path d="M41.784 49.01l-22.157 2.031-7.57 16.987" stroke-miterlimit="10" stroke-width="3.5"
                        stroke-linecap="round" stroke="#333" fill="none" style="stroke: rgb(51, 51, 51);"></path>
                </g>
            </g>
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -1s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <path d="M41.784 60.273L21.658 75.229 25.812 90" stroke-miterlimit="10" stroke-width="3.5"
                        stroke-linecap="round" stroke="#333" fill="none" style="stroke: rgb(51, 51, 51);"></path>
                </g>
            </g>
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -1.05556s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <circle stroke-linecap="round" stroke="#333" fill="#67503b" stroke-miterlimit="10"
                        stroke-width="3.5" r="17.142" cy="57.278" cx="50.277"
                        style="fill: rgb(103, 80, 59); stroke: rgb(51, 51, 51);"></circle>
                </g>
            </g>
            <g class="ldl-layer">
                <g class="ldl-ani"
                    style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -1.11111s infinite normal forwards running breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8;">
                    <circle stroke-linecap="round" stroke="#333" fill="#67503b" stroke-miterlimit="10"
                        stroke-width="3.5" r="9.743" cy="33.717" cx="50.277"
                        style="fill: rgb(103, 80, 59); stroke: rgb(51, 51, 51);"></circle>
                </g>
            </g>
        </g>
    </g>
    <style>
        @keyframes breath-f65d0dfa-1b86-4a64-b594-d8cf4e23b5e8 {
            0% {
                animation-timing-function: cubic-bezier(0.9647, 0.2413, -0.0705, 0.7911);
                transform: scale(0.9099999999999999);
            }

            51% {
                animation-timing-function: cubic-bezier(0.9226, 0.2631, -0.0308, 0.7628);
                transform: scale(1.02994);
            }

            100% {
                transform: scale(0.9099999999999999);
            }
        }
        .stop-animation g {
            animation: none!important;
        }
    </style>
  </svg>
  `

  const pagerItemClassList = `h-10 px-5 
    text-indigo-600 bg-white
    transition-colors duration-150
    border border-r-0 border-indigo-600 focus:shadow-outline`

  function $(selector) {
    return document.querySelector(selector)
  }

  function $$(selector) {
    return Array.from(document.querySelectorAll(selector))
  }

  /**
   * 将 html 字符串转为 DOM 节点：https://stackoverflow.com/a/35385518/474231 。
   * @param {String} HTML representing a single element
   * @return {Element}
   */
  function htmlToElement(html) {
    var template = document.createElement('template')
    template.innerHTML =  html.trim() // Never return a text node of whitespace as the result
    return template.content.firstChild
  }

  // TODO:
  // 1. [done] embed the player into the resource page
  // 2. [done] crawl the resource of an author to a local database (indexdb?)
  // 3. [done] add a ui to search audios from the local database
  // 4. [done] select audios from the search results 
  // 5. add them to the playlist.

  function embedPlayer() {
    const iframe = `
      <iframe src="https://www.lizhi.fm/box"
        style="position: fixed; width: 600px; height: 400px; top: 8px; right: 8px; z-index: 999;"
        scrolling="no"></iframe>
    `
    document.body.prepend(htmlToElement(iframe))
  }

  function indexCurrentPageData() {
    const audios = $$('.js-audio-list li a.js-play-data').map(it => {
      return {
        band: it.getAttribute('data-band'),
        cover: it.getAttribute('data-cover'),
        duration: parseInt(it.getAttribute('data-duration')),
        hiddenPh: it.getAttribute('data-hidden-ph'),
        radioName: it.getAttribute('data-radio-name'),
        rid: parseInt(it.getAttribute('data-rid')),
        id: it.getAttribute('data-id'),
        title: it.getAttribute('data-title'),
        payFlag: parseInt(it.getAttribute('data-payFlag')),
        islistenfirst: parseInt(it.getAttribute('data-isListenFirst')),
        url: '',
        userName: it.getAttribute('data-user-name'),
      }
    })
    if (!audios.length) return

    const request = window.indexedDB.open('database', 1)
    request.onupgradeneeded = event => {
      const db = event.target.result
      const objectStore = db.createObjectStore('audios')
      objectStore.createIndex('title', 'title', { unique: false })
    }

    request.onsuccess = () => {
      const db = request.result
      const transaction = db.transaction(['audios'], 'readwrite')
      const audioStore = transaction.objectStore('audios')
      audios.forEach(it => audioStore.put(it, it.id))
    }
  }

  const SCRAWLING_KEYWORD = 'scrawling-indicator'

  async function addCrawlerButton() {
    const buttton = htmlToElement(`
      <button id="btnToggleCrawling"
              style="position: fixed; top: 60px; left: 50%; z-index: 999; width: 80px">
        ${crawlerSvg}
      </button>
    `)
    
    buttton.onclick = () => toggleCrawling()
    const isCrawling = await GM.getValue(SCRAWLING_KEYWORD)
    if (isCrawling) {
      buttton.querySelector('svg > g').classList.remove('stop-animation')
    } 
    document.body.prepend(buttton)
  }

  async function toggleCrawling() {
    const isCrawling = await GM.getValue(SCRAWLING_KEYWORD)
    GM.setValue(SCRAWLING_KEYWORD, !isCrawling)
    $('#btnToggleCrawling svg > g').classList.toggle('stop-animation')

    openNextPageIfCrawling()
  }

  async function openNextPageIfCrawling() {
    const isCrawling = await GM.getValue(SCRAWLING_KEYWORD)
    if (!isCrawling) return

    const nextPageLink = $('a.next')?.getAttribute('href')
    if (!nextPageLink) {
      console.log("next page link not found, is the crawling done?")
      toggleCrawling()
      return
    }

    const timeout = 3000 + Math.floor(Math.random() * 7000)
    console.log(`crawling next page in ${timeout} ms`)
    setTimeout( () => window.location.href = $('a.next').getAttribute('href'), timeout)
  }

  function doSearch() {
    const keyword = $('#search-keyword')?.value
    if (!keyword) return

    const request = window.indexedDB.open('database', 1)

    let results = []
    request.onsuccess = () => {
      const db = request.result
      const transaction = db.transaction(['audios'], 'readonly')
      const audioStore = transaction.objectStore('audios')
      
      const index = audioStore.index('title')
      index.openKeyCursor().onsuccess = event => {
        const cursor = event.target.result
        if (cursor) {
          if (cursor.key.includes(keyword)) {
            results.push(cursor.primaryKey)
          }
          cursor.continue()
        } else if (results.length > 0) {
          showMatchedResults(audioStore, results)
        }
      }
    }
  }

  async function showMatchedResults(audioStore, matchedKeys) {
    Promise.all(matchedKeys.map(key => new Promise((resolve, reject) => {
      const req = audioStore.get(key)
      req.onsuccess = ({ target: { result } }) => resolve(result)
      req.onerror = ({ target: { error } }) => reject(error)
    }))).then(audioList => showSearchResults(audioList))
  }

  function showSearchResults(results) {
    const html = results.map(it => {
      return `
        <li class="matched-item">
          <div class="p-4 border-t border-l border-r rounded-t-lg">
            <label class="text-gray-700">
              <input type="checkbox" value=""/>
              <span class="ml-1">${it.title}</span>
              <span class="ml-1">${it.duration}s</span>
              <span class="ml-1">${it.radioName}</span>
            </label>
          </div>
        </li>
      `
    }).join('')
    $('#results').innerHTML = html

    $('#actions').classList.remove('hidden')

    let pagers = Array.from({length: Math.ceil(results.length / 10)})
      .map((_, idx) =>
        `<li><button class="${pagerItemClassList} pager">${idx + 1}</button></li>`)
      .join('')
    pagers = `
      <li><button class="${pagerItemClassList} rounded-l-lg" id="btnPrev">Prev</button></li>
      ${pagers}
      <li><button class="${pagerItemClassList} rounded-r-lg" id="btnNext">Next</button></li>
    `
    $('#navigation').innerHTML = pagers

    $$('.pager').forEach((it, idx) => it.onclick = () => switchToPage(idx))
    $('#btnPrev').onclick = () => movePage(-1)
    $('#btnNext').onclick = () => movePage(1)
    switchToPage(0)
  }

  function movePage(distance) {
    const currentPage = parseInt($('.pager.text-white').innerHTML) - 1
    const page = Math.max(0, Math.min(currentPage + distance, $$('.pager').length - 1))
    switchToPage(page)
  }

  function switchToPage(page) {
    const from = page * 10
    const to = from + 10

    const items = $$('.matched-item')
    items.forEach(it => it.classList.add('hidden'))
    items
      .filter((_, idx) => idx >= from && idx < to)
      .forEach(it => it.classList.remove('hidden'))

    const pagers = $$('.pager')
    pagers.forEach(it => {
      it.classList.add('text-indigo-600', 'bg-white')
      it.classList.remove('text-white', 'bg-indigo-600')
    })

    const currentPager = $(`#navigation > li:nth-child(${page + 2}) .pager`)
    currentPager.classList.add('text-white', 'bg-indigo-600')
    currentPager.classList.remove('text-indigo-600', 'bg-white')
  }

  function addSearchBox() {
    const searchSection = htmlToElement(`
      <section class="fixed w-96 top-1 left-1 z-50 bg-slate-100">
        <div class="w-full px-2 relative">
          <input class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 
                        border rounded-lg focus:shadow-outline" 
                type="text" 
                id="search-keyword"
                value="爸爸"
                placeholder="search keyword"/>
          <button class="absolute inset-y-0 right-0 flex items-center px-4 font-bold 
                         text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 
                         focus:bg-indigo-700"
                  id="btnSearch">Search</button>
        </div>
        <div class="w-full hidden" id="actions">
          <button class="h-10 px-5 m-2 text-blue-100 transition-colors 
                        duration-150 bg-blue-600 rounded-lg 
                        focus:shadow-outline hover:bg-blue-700"
                  id="btnCheckAll">Check/Uncheck this page</button>
          <button class="h-10 px-5 m-2 text-green-100 transition-colors 
                        duration-150 bg-green-700 rounded-lg 
                        focus:shadow-outline hover:bg-green-800"
                  id="btnAddToPlayList">Add to playlist</button>
        
        </div>
        <nav aria-label="Page navigation">
          <ul class="inline-flex" id="navigation"></ul>
        </nav>
        <ul class="w-full" id="results"></ul>
      </section>
    `)
    document.body.prepend(searchSection)

    $('#btnSearch').onclick = doSearch

    $('#btnCheckAll').onclick = 
      () =>  $$('.matched-item:not(.hidden) input').forEach(it => it.checked = !it.checked)
    
    $('#btnAddToPlayList').onclick = () => {
      $$('.matched-item:not(.hidden) input')
        .filter(it => it.checked)  
        .forEach(it => console.log(it.parentElement.innerText))
    }
  }

  // embedPlayer()
  indexCurrentPageData()
  addCrawlerButton()
  addSearchBox()

  openNextPageIfCrawling()
})();