function getSearchTerm() {
    let sPageURL = window.location.search.substring(1);
    let sURLletiables = sPageURL.split('&');
    for (let i = 0; i < sURLletiables.length; i++) {
        let sParameterName = sURLletiables[i].split('=');
        if (sParameterName[0] === 'q') {
            return decodeURIComponent(sParameterName[1].replace(/\+/g, '%20'));
        }
    }
}

// We only want 1 request running at a time, or else things just go wonky
var request;
if (!window.location.pathname.endsWith("search.html")) {

    function search(query) {
        if (request) {
            request.abort();
        }
        let resultsElement = document.getElementById("mkdocs-search-results");
        // this is needed for some reason, without it the content element is undefined...
        let simpleBar = new SimpleBar(resultsElement);
        simpleBar = SimpleBar.instances.get(resultsElement);
        let search_results = simpleBar.getContentElement();
        let resultsContainer = $("#mkdocs-search-results-container");
        if (query.trim().length < 3) {
            while (search_results.firstChild) {
                search_results.removeChild(search_results.firstChild);
            }
            resultsContainer.slideUp();
            return;
        }
        request = $.get(`http://docs.blamejared.com/search?v=${game_version}&lang=${language}&base_url=${base_url}&q=${query}`, function (value) {
            while (search_results.firstChild) {
                search_results.removeChild(search_results.firstChild);
            }
            if (value.count > 0) {
                for (let index in value.results) {
                    let result = value.results[index];
                    search_results.insertAdjacentHTML('beforeend', `<a href="${result.location}" class="block hover:bg-gray-400">
    <div class="py-1 pl-2">
        <h4 class="my-0 text-blue-500 text-base">
            ${result.title.replace(new RegExp(`(${query})`, `gi`), "<span class='font-bold'>$1</span>")}
        </h4>
        <p class="my-0 text-xs truncate ">
            ${result.text.substring(0, 90).replace(new RegExp(`(${query})`, `gi`), "<span class='font-bold'>$1</span>")}</p>
    </div>
</a>
`);
                }
            } else {
                search_results.insertAdjacentHTML('beforeend', `<div class="block hover:bg-gray-400">
                        <div class="py-1 pl-2">
                            <h4 class="my-0 text-base">No results found for "${query}"</h4>
                        </div>
                    </div>`);
            }
            if (value.totalCount > 5) {
                search_results.insertAdjacentHTML('beforeend', `<a href="${base_url}/search.html?q=${query}" class="block hover:bg-gray-400">
                        <div class="py-1 pl-2">
                            <h4 class="my-0 text-blue-500 text-base">See all results</h4>
                        </div>
                    </a>`);
            }
            resultsContainer.slideDown();
            simpleBar.recalculate();
        });
    }

    let search_input = $("#mkdocs-search-query");

    let term = getSearchTerm();
    if (term) {
        search_input.val(term);
        search(term);
    }

    search_input.keyup(debounce(function () {
        search(search_input.val());
    }, 250, false));

} else {

    function search(query) {
        if (request) {
            request.abort();
        }
        let resultsElement = document.getElementById("search-results");

        // this is needed for some reason, without it the content element is undefined...
        if (query.trim().length < 3) {
            while (resultsElement.firstChild) {
                resultsElement.removeChild(resultsElement.firstChild);
            }
            return;
        }
        request = $.get(`http://docs.blamejared.com/search?v=${game_version}&lang=${language}&base_url=${base_url}&q=${query}&limit=-1`, function (value) {
            while (resultsElement.firstChild) {
                resultsElement.removeChild(resultsElement.firstChild);
            }
            if (value.count > 0) {
                for (let index in value.results) {
                    let result = value.results[index];
                    resultsElement.insertAdjacentHTML('beforeend', `<a href="${result.location}" class="block hover:bg-gray-400">
    <div class="py-1 pl-2">
        <h4 class="my-0 text-blue-500 text-base">
            ${result.title.replace(new RegExp(`(${query})`, `gi`), "<span class='font-bold'>$1</span>")}
        </h4>
        <p class="my-0 text-xs truncate ">
            ${result.text.substring(0, 90).replace(new RegExp(`(${query})`, `gi`), "<span class='font-bold'>$1</span>")}</p>
    </div>
</a>
`);
                }
            } else {
                resultsElement.insertAdjacentHTML('beforeend', `<div class="block hover:bg-gray-400">
                        <div class="py-1 pl-2">
                            <h4 class="my-0 text-base">No results found for "${query}"</h4>
                        </div>
                    </div>`);
            }
            if (value.totalCount > 5) {
                resultsElement.insertAdjacentHTML('beforeend', `<a href="${base_url}/search.html?q=${query}" class="block hover:bg-gray-400">
                        <div class="py-1 pl-2">
                            <h4 class="my-0 text-blue-500 text-base">See all results</h4>
                        </div>
                    </a>`);
            }
        });
    }

    let nav_search = document.getElementById("mkdocs-search-query");
    let search_input = document.getElementById('search-query');
    let term = getSearchTerm();
    if (term) {
        search_input.value = term;
        nav_search.value = term;
        search(term);
    }
    search_input.addEventListener("keyup", ev => {
        nav_search.value = ev.target.value;
    });
    nav_search.addEventListener("focus", ev => {
        search_input.focus();
    });
    search_input.addEventListener("keyup", debounce(function () {
        search(search_input.value);
    }, 250, false));

}

//http://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};