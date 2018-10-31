(function (window) {
  var svgSprite = '<svg><symbol id="icon-jichuguanli" viewBox="0 0 1024 1024"><path d="M204.8 230.4v563.2h614.4v-563.2h-614.4z m563.2 512h-512v-368.64h512v368.64z m-209.92-184.32h61.44v-40.96h81.92v-35.84h-81.92V440.32h-61.44v40.96h-235.52v35.84h235.52v40.96z m-107.52 15.36h-61.44v40.96h-66.56v35.84h66.56v46.08h61.44v-40.96h256v-35.84h-256v-46.08z" fill="#fff" ></path></symbol><symbol id="icon-newbimoney" viewBox="0 0 1024 1024"><path d="M463.3 958.3V772.1H228.8v-77.5h234.5v-80.5H228.8v-83.5H420L191.5 128h113.7L469 420.6c18.2 33.4 32.4 62.4 42.7 86.9 9-19.8 24.6-50.5 46.8-92.1L713.9 128h120.8L605.5 530.6h192.9v83.5H564.9v80.5h233.5v77.5H564.9v186.2H463.3z"  ></path></symbol><symbol id="icon-shoppingcard" viewBox="0 0 1025 1024"><path d="M1011.936 346.56C999.872 329.872 980.56 320 960 320L303.632 320 254.944 52.56C249.44 22.128 222.944 0 192 0L64 0C28.624 0 0 28.624 0 64s28.624 64 64 64l74.56 0 118.496 651.44C262.56 809.872 289.056 832 320 832l512 0c27.568 0 52-17.632 60.688-43.744l128-384C1027.248 384.752 1023.936 363.248 1011.936 346.56zM785.872 704 373.44 704l-46.56-256 544.32 0L785.872 704z"  ></path><path d="M704 960m-64 0a4 4 0 1 0 128 0 4 4 0 1 0-128 0Z"  ></path><path d="M448 960m-64 0a4 4 0 1 0 128 0 4 4 0 1 0-128 0Z"  ></path></symbol><symbol id="icon-newbimoney" viewBox="0 0 1024 1024"><path d="M463.3 958.3V772.1H228.8v-77.5h234.5v-80.5H228.8v-83.5H420L191.5 128h113.7L469 420.6c18.2 33.4 32.4 62.4 42.7 86.9 9-19.8 24.6-50.5 46.8-92.1L713.9 128h120.8L605.5 530.6h192.9v83.5H564.9v80.5h233.5v77.5H564.9v186.2H463.3z"  ></path></symbol><symbol id="icon-message" viewBox="0 0 1024 1024"><path d="M885.4016 112.64H136.2432C60.928 112.64 0 171.6736 0 244.1728v430.08c0 72.3968 60.928 131.1744 136.2432 131.1744H291.84v140.6464c0 6.656 2.304 10.8032 7.68 10.8032s12.1344-3.2256 22.2208-10.8032c21.6064-16.3328 180.0192-140.8 180.0192-140.8h383.4368c75.1616 0 136.192-58.7776 136.192-131.1744v-430.08C1021.5936 171.6736 960.6144 112.64 885.4016 112.64z m63.232 561.3056a62.1056 62.1056 0 0 1-63.232 60.8256H501.76a74.2912 74.2912 0 0 0-46.08 15.8208l-90.6752 71.3728v-16.7424A71.68 71.68 0 0 0 291.84 734.976H136.2432a62.1568 62.1568 0 0 1-63.2832-60.8256v-430.08a62.2592 62.2592 0 0 1 63.2832-60.928h749.1584a62.2592 62.2592 0 0 1 63.232 61.0304zM291.84 411.6992a52.7872 52.7872 0 1 0 54.784 52.736A53.76 53.76 0 0 0 291.84 411.6992z m218.9312 0a52.7872 52.7872 0 1 0 54.7328 52.736 53.76 53.76 0 0 0-54.6816-52.736z m218.9312 0a52.7872 52.7872 0 1 0 54.7328 52.736 53.76 53.76 0 0 0-54.7328-52.736z"  ></path></symbol><symbol id="icon-peoples" viewBox="0 0 1024 1024"><path d="M765.184 873.941c0 33.28-28.501 60.288-63.83 60.288H63.83C28.501 934.23 0 907.221 0 873.941c0-120.576 123.264-233.258 249.216-277.674-72.79-42.496-121.728-118.059-121.728-204.8v-60.331c0-133.248 114.347-241.365 255.147-241.365S637.78 197.888 637.78 331.136v60.288c0 86.827-48.981 162.304-121.728 204.843 125.91 44.458 249.131 157.098 249.131 277.674z" fill="" ></path><path d="M848.256 870.57h126.933c27.008 0 48.811-20.65 48.811-46.08 0-92.245-94.293-178.346-190.55-212.309 55.638-32.512 93.1-90.282 93.1-156.672v-46.165c0-101.888-87.425-184.576-195.115-184.576-13.398 0-26.454 1.28-39.126 3.712 15.488 31.147 24.15 65.92 24.15 102.613v60.288c0 86.827-24.448 152.747-88.534 204.843 118.742 29.141 218.496 154.795 220.331 274.347z" fill="" ></path></symbol><symbol id="icon-coordinates" viewBox="0 0 1024 1024"><path d="M512 813.312C445.568 732.928 288 520.064 288 416c0-123.488 100.48-224 224-224s224 100.512 224 224c0 103.776-156.96 316.064-224 397.344M512 128c-158.784 0-288 129.184-288 288 0 148.416 217.696 413.088 243.232 443.616a57.92 57.92 0 0 0 44.8 21.856h0.096a57.6 57.6 0 0 0 44.512-21.696C581.536 830.016 800 564.672 800 416c0-158.816-129.216-288-288-288"  ></path><path d="M512 480c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64-28.704 64-64 64m0-192c-70.592 0-128 57.408-128 128s57.408 128 128 128 128-57.408 128-128-57.408-128-128-128"  ></path></symbol><symbol id="icon-homepage" viewBox="0 0 1024 1024"><path d="M768 790.56l-128-0.032v-118.944a128.224 128.224 0 0 0-128-128.192c-70.592 0-128 57.504-128 128.192v118.88l-128-0.032V364.992l255.68-167.52L768 365.376v425.184z m-192-0.032l-128-0.032v-118.912c0-35.392 28.704-64.192 64-64.192s64 28.8 64 64.192v118.944z m304.896-427.68L800 309.856V207.168a32 32 0 1 0-64 0v60.768l-206.464-135.296A31.296 31.296 0 0 0 511.424 128a31.168 31.168 0 0 0-17.6 4.64l-351.36 230.208a32 32 0 0 0 35.072 53.536L192 406.912v393.056c0 30.08 27.2 54.592 60.576 54.592h518.848c33.408 0 60.576-24.512 60.576-54.592v-392.64l13.856 9.056a31.968 31.968 0 0 0 35.04-53.536z"  ></path></symbol><symbol id="icon-manage" viewBox="0 0 1024 1024"><path d="M224 423.84V231.744l192-0.096 0.096 192.096L224 423.84z m192.096-256.096H223.904A64 64 0 0 0 160 231.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 480 423.84V231.68a64 64 0 0 0-63.904-63.904zM224 807.84v-192.096l192-0.096 0.096 192.096L224 807.84z m192.096-256.096H223.904A64 64 0 0 0 160 615.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 480 807.84V615.68a64 64 0 0 0-63.904-63.904zM704.064 463.616l-135.84-135.84 135.712-135.84 135.904 135.744-135.776 135.936z m181.024-181.024l-135.904-135.904a64 64 0 0 0-90.368 0L522.912 282.56a63.456 63.456 0 0 0-18.656 45.056 63.456 63.456 0 0 0 18.656 45.312l135.904 135.936a63.904 63.904 0 0 0 90.368-0.032l135.904-135.904a63.936 63.936 0 0 0 0-90.368zM608 807.84v-192.096l192-0.096 0.096 192.096-192.096 0.096z m192.096-256.096h-192.192A64 64 0 0 0 544 615.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 864 807.84V615.68a64 64 0 0 0-63.904-63.904z"  ></path></symbol><symbol id="icon-people" viewBox="0 0 1024 1024"><path d="M800 835.328l-574.496 0.032A2.464 2.464 0 0 1 224 834.656v-118.656c0-5.856 5.92-14.944 12.096-17.44 1.056-0.448 69.408-30.272 149.952-50.464 41.248-10.336 85.632-18.208 125.952-18.208 36.64 0 76.736 6.496 114.816 15.456a1061.6 1061.6 0 0 1 161.856 53.536c5.312 2.176 11.328 11.296 11.328 17.12v119.36zM400.992 326.88A103.136 103.136 0 0 1 504.16 224a103.168 103.168 0 0 1 103.2 102.88v123.104a103.168 103.168 0 0 1-103.2 102.88 103.136 103.136 0 0 1-103.168-102.88v-123.104zM813.728 640c-3.904-1.728-58.56-25.6-129.312-45.76a883.616 883.616 0 0 0-72.608-17.6c36.096-30.592 59.552-75.68 59.552-126.656v-123.104A167.168 167.168 0 0 0 504.192 160c-92.16 0-167.2 74.72-167.2 166.88v123.104c0 52.352 24.768 98.624 62.72 129.28-25.472 5.376-50.112 11.872-72.8 18.656a1098.656 1098.656 0 0 0-115.648 41.664C182.016 651.328 160 684.192 160 716v131.68l1.696 4.992c9.504 27.936 35.136 46.72 63.808 46.72h572.992a65.536 65.536 0 0 0 64.96-56.96l0.544-126.4c0-31.616-21.952-64.416-50.272-76.032z"  ></path></symbol><symbol id="icon-setup" viewBox="0 0 1024 1024"><path d="M825.312 566.816a127.04 127.04 0 0 0-91.616 62.624 127.232 127.232 0 0 0-8.448 110.56 318.976 318.976 0 0 1-113.216 65.472A127.072 127.072 0 0 0 512 757.44a127.2 127.2 0 0 0-100.064 48 319.232 319.232 0 0 1-113.216-65.44 127.232 127.232 0 0 0-8.416-110.56 127.04 127.04 0 0 0-91.648-62.624 323.232 323.232 0 0 1 0-130.784 127.104 127.104 0 0 0 91.648-62.592 127.296 127.296 0 0 0 8.416-110.592 318.976 318.976 0 0 1 113.216-65.472A127.232 127.232 0 0 0 512 245.44c39.712 0 76.064-17.92 100.032-48.064a318.72 318.72 0 0 1 113.216 65.472 127.328 127.328 0 0 0 8.448 110.592 127.104 127.104 0 0 0 91.616 62.592 321.536 321.536 0 0 1 0 130.784m56.16-170.304a31.776 31.776 0 0 0-32.832-23.2 63.584 63.584 0 0 1-59.52-31.872 63.744 63.744 0 0 1 2.112-67.52 32 32 0 0 0-3.68-39.936 383.392 383.392 0 0 0-181.696-104.992 31.968 31.968 0 0 0-36.48 16.832A63.68 63.68 0 0 1 512 181.44a63.68 63.68 0 0 1-57.376-35.616 32 32 0 0 0-36.48-16.832 383.264 383.264 0 0 0-181.696 104.96 32 32 0 0 0-3.712 40 63.68 63.68 0 0 1 2.112 67.488 63.68 63.68 0 0 1-59.52 31.872 31.52 31.52 0 0 0-32.8 23.2A383.136 383.136 0 0 0 128 501.44c0 35.648 4.864 70.944 14.528 104.896a31.904 31.904 0 0 0 32.8 23.2 64.032 64.032 0 0 1 59.52 31.904c12.256 21.184 11.456 47.04-2.112 67.456a32 32 0 0 0 3.712 39.968 382.88 382.88 0 0 0 181.696 104.96 31.936 31.936 0 0 0 36.48-16.8A63.648 63.648 0 0 1 512 821.44c24.512 0 46.496 13.632 57.376 35.584a32 32 0 0 0 36.48 16.832 383.04 383.04 0 0 0 181.696-104.992 32 32 0 0 0 3.68-40 63.68 63.68 0 0 1-2.112-67.424 63.136 63.136 0 0 1 59.52-31.904c15.04 0.896 28.704-8.736 32.832-23.2A384.64 384.64 0 0 0 896 501.44c0-35.648-4.896-70.944-14.528-104.96"  ></path><path d="M512 597.44c-52.928 0-96-43.104-96-96 0-52.96 43.072-96 96-96s96 43.04 96 96c0 52.896-43.072 96-96 96m0-256c-88.224 0-160 71.744-160 160 0 88.224 71.776 160 160 160s160-71.808 160-160c0-88.256-71.776-160-160-160"  ></path></symbol><symbol id="icon-unlock" viewBox="0 0 1024 1024"><path d="M224 799.936v-319.84L223.744 480h124.832a31.488 31.488 0 0 0 13.728 3.392 31.36 31.36 0 0 0 13.696-3.36l424 0.064 0.256 319.904L224 799.936zM800.256 416H394.304V316.608A124.672 124.672 0 0 1 518.72 192a124.704 124.704 0 0 1 124.48 124.608 32 32 0 1 0 64 0A188.736 188.736 0 0 0 518.72 128c-103.904 0-188.416 84.608-188.416 188.608V416h-106.56A64 64 0 0 0 160 480.096v319.84A64 64 0 0 0 223.744 864h576.512A64 64 0 0 0 864 799.936v-319.84A64 64 0 0 0 800.256 416z"  ></path><path d="M512 544a32 32 0 0 0-32 32v128a32 32 0 0 0 64 0v-128a32 32 0 0 0-32-32"  ></path></symbol><symbol id="icon-HAMBURGERMENU" viewBox="0 0 1024 1024"><path d="M177.50016 307.2h614.4a20.48 20.48 0 1 0 0-40.96h-614.4a20.48 20.48 0 1 0 0 40.96zM177.50016 757.76h614.4a20.48 20.48 0 1 0 0-40.96h-614.4a20.48 20.48 0 1 0 0 40.96zM177.50016 532.48h614.4a20.48 20.48 0 1 0 0-40.96h-614.4a20.48 20.48 0 1 0 0 40.96z" fill="#231F20" ></path></symbol></svg>';
  var script = function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1]
  }();
  var shouldInjectCss = script.getAttribute("data-injectcss");
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function () {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn()
        };
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document, done = false, init = function () {
        if (!done) {
          done = true;
          fn()
        }
      };
      var polling = function () {
        try {
          d.documentElement.doScroll("left")
        } catch (e) {
          setTimeout(polling, 50);
          return
        }
        init()
      };
      polling();
      d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init()
        }
      }
    }
  };
  var before = function (el, target) {
    target.parentNode.insertBefore(el, target)
  };
  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  };

  function appendSvg() {
    var div, svg;
    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }
  ready(appendSvg)
})(window)
