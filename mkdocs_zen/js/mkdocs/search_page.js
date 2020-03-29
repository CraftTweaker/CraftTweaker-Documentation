require([
    base_url + '/js/mkdocs/mustache.min.js',
    base_url + '/js/mkdocs/lunr.min.js',
    `${base_url}/text!${base_url}/js/mkdocs/search-results-template.mustache`,
    `${base_url}/text!${base_url}/mkdocs/search_index.json`,
], function (Mustache, lunr, results_template, data) {
    "use strict";

    function getSearchTerm() {
        let sPageURL = window.location.search.substring(1);
        let sURLletiables = sPageURL.split('&');
        for (let i = 0; i < sURLletiables.length; i++) {
            let sParameterName = sURLletiables[i].split('=');
            if (sParameterName[0] == 'q') {
                return decodeURIComponent(sParameterName[1].replace(/\+/g, '%20'));
            }
        }
    }

    let index = lunr(function () {
        this.field('title', {boost: 10});
        this.field('text');
        this.ref('location');
    });

    data = JSON.parse(data);
    let documents = {};

    for (let i = 0; i < data.docs.length; i++) {
        let doc = data.docs[i];
        doc.location = base_url + doc.location;
        index.add(doc);
        documents[doc.location] = doc;
    }

    let search = function () {

        let query = document.getElementById('search-query').value;
        let resultsElement = document.getElementById("search-results");

        // this is needed for some reason, without it the content element is undefined...

        while (resultsElement.firstChild) {
            resultsElement.removeChild(resultsElement.firstChild);
        }

        let results = index.search(query);

        if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
                let result = results[i];
                let doc = documents[result.ref];
                doc.base_url = base_url;
                doc.summary = doc.text.substring(0, 200);
                let html = Mustache.to_html(results_template, doc);
                resultsElement.insertAdjacentHTML('beforeend', html.replace(new RegExp(`(?<!href.*)(${query})`, `gi`), "<span class='font-bold'>$1</span>"));
            }
        } else {
            resultsElement.insertAdjacentHTML('beforeend', `<div class="block hover:bg-gray-400">
                        <div class="py-1 pl-2">
                            <h4 class="my-0 text-base">No results found for "${query}"</h4>
                        </div>
                    </div>`);
        }

    };

    let search_input = document.getElementById('search-query');
    let nav_search = document.getElementById("mkdocs-search-query");

    let term = getSearchTerm();
    if (term) {
        search_input.value = term;
        nav_search.value = term;
        search();
    }
    search_input.addEventListener("keyup", ev => {
        nav_search.value = ev.target.value;
    });
    search_input.addEventListener("keyup", search);
    nav_search.addEventListener("focus", ev => {
        search_input.focus();
    });
});
