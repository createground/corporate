// 全ページ共通：ヘッダー・フッター・住宅事業のサブメニュー・アイコン・スクロール演出
(function () {
  var body = document.body;
  var root = body.getAttribute('data-root') || './';
  var section = body.getAttribute('data-section') || '';
  var sub = body.getAttribute('data-sub') || '';

  var header =
    '<header class="hd"><div class="wrap">' +
    '<a class="logo" href="' + root + 'index.html"><i></i><b>CREATE GROUND</b></a>' +
    '<button class="menu-btn" aria-label="メニュー"><span></span></button>' +
    '<nav class="nav">' +
    '<a href="' + root + 'index.html#story">私たちについて</a>' +
    '<a href="' + root + 'index.html#business">事業内容</a>' +
    '<a href="' + root + 'housing/index.html">不動産事業</a>' +
    '<a href="' + root + 'news/index.html">お知らせ</a>' +
    '<a href="' + root + 'company.html">会社概要</a>' +
    '<a class="cta" href="' + root + 'contact.html">お問い合わせ</a>' +
    '</nav></div></header>';

  var footer =
    '<footer class="ft"><div class="wrap"><div class="top">' +
    '<div><a class="logo" href="' + root + 'index.html"><i></i><b>CREATE GROUND</b></a>' +
    '<p>合同会社クリエイトグラウンド<br>〒153-0064 東京都目黒区下目黒1-1-14 コノトラビル7F</p>' +
    '<p class="tel">TEL <a href="tel:0345639965">03-4563-9965</a>　FAX 03-6630-2527</p></div>' +
    '<div><h5>BUSINESS</h5><ul>' +
    '<li><a href="' + root + 'housing/index.html">不動産事業（法人社宅）</a></li>' +
    '<li><a href="' + root + 'business/consulting.html">経営改善・事業再生</a></li>' +
    '<li><a href="' + root + 'business/ai.html">AI・研修・出版</a></li></ul></div>' +
    '<div><h5>REAL ESTATE</h5><ul>' +
    '<li><a href="' + root + 'housing/service.html">サービス</a></li>' +
    '<li><a href="' + root + 'housing/partners.html">オーナー・管理会社様へ</a></li>' +
    '<li><a href="' + root + 'housing/residents.html">住まいをお探しの方へ</a></li></ul></div>' +
    '<div><h5>COMPANY</h5><ul>' +
    '<li><a href="' + root + 'company.html">会社概要</a></li>' +
    '<li><a href="' + root + 'news/index.html">お知らせ</a></li>' +
    '<li><a href="' + root + 'contact.html">お問い合わせ</a></li>' +
    '<li><a href="' + root + 'privacy.html">プライバシーポリシー</a></li></ul></div>' +
    '</div><div class="copy">© CREATE GROUND LLC.</div></div></footer>';

  body.insertAdjacentHTML('afterbegin', header);
  body.insertAdjacentHTML('beforeend', footer);

  if (section === 'housing') {
    var items = [
      ['index', 'index.html', '事業トップ'],
      ['service', 'service.html', 'サービス'],
      ['partners', 'partners.html', 'オーナー・管理会社様へ'],
      ['residents', 'residents.html', '住まいをお探しの方へ'],
      ['company', 'company.html', '事業者情報']
    ];
    var html = '<div class="subnav"><div class="wrap"><b>不動産事業</b>' +
      items.map(function (i) {
        return '<a class="' + (i[0] === sub ? 'on' : '') + '" href="' + root + 'housing/' + i[1] + '">' + i[2] + '</a>';
      }).join('') + '</div></div>';
    var hero = document.querySelector('.hero');
    if (hero) hero.insertAdjacentHTML('afterend', html);
  }

  // ヘッダー：ヒーローを過ぎたら白背景に
  var hd = document.querySelector('.hd');
  var hasHero = !!document.querySelector('.hero');
  var onScroll = function () { hd.classList.toggle('solid', !hasHero || window.scrollY > 60 || document.querySelector('.nav').classList.contains('open')); };
  window.addEventListener('scroll', onScroll); onScroll();
  document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('open'); onScroll();
  });

  // 線画アイコン
  var P = {
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    bank: '<path d="M3 10h18L12 4 3 10zM5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"/>',
    ai: '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM4 19a2 2 0 0 1 2-2h13"/>',
    home: '<path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6"/>',
    office: '<path d="M4 21V4h10v17M14 9h6v12M7 8h4M7 12h4M7 16h4M2 21h20"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/>',
    doc: '<path d="M6 2h9l5 5v15H6zM14 2v6h6M9 13h8M9 17h6"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    talk: '<path d="M4 5h16v11H9l-5 4z"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14c3 0 5 2.2 5 5"/>'
  };
  document.querySelectorAll('[data-ic]').forEach(function (el) {
    el.insertAdjacentHTML('afterbegin', '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">' + P[el.getAttribute('data-ic')] + '</svg>');
  });

  // スクロールでふわっと表示
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
  // 保険：何かの理由で発火しなくても、少し待てば必ず表示する
  setTimeout(function () { document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('in'); }); }, 2500);
})();
