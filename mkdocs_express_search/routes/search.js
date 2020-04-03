const axios = require('axios');
var lunr = require('lunr');
var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
    let version = req.query["v"];
    let lang = req.query["lang"];
    let query = req.query["q"];
    let base_url = req.query["base_url"];
    if (!version || !lang || !query) {
        res.status(400).send({message: "Requires version (v), language (lang) and query (q), base_url (base_url) (optional)", example: "?v=1.12&lang=en&q=item&base_url=../..", given: {version: `${version}`, lang: `${lang}`, query: `${query}`, base_url: `${base_url}`}});
        return;
    }
    if (!base_url) {
        base_url = "";
    }
    if (query.length < 3) {
        res.status(400).send({error: "Minimum search query is 3 characters!"});
    }
    // TODO maybe send a request to index.php to ensure that this actually exists first.
    let data = await axios.get(`https://docs.blamejared.com/${version}/${lang}/mkdocs/search_index.json`, {}).then(value => Promise.resolve({error: false, data: value.data})).catch(reason => Promise.resolve({error: true, data: reason}));
    if (data.error) {
        res.status(400).send({error: data.data.message});
        return;
    }
    let documents = {};
    let index;
    // check if an index is provided first
    if (data.data.index) {
        index = lunr.Index.load(data.data.index);
        for (let i = 0; i < data.data.docs.length; i++) {
            let doc = data.data.docs[i];
            documents[doc.location] = doc;
        }
    } else {
        index = lunr(function () {
            this.field('title', {boost: 10});
            this.field('text');
            this.ref('location');
            for (let i = 0; i < data.data.docs.length; i++) {
                let doc = data.data.docs[i];
                this.add(doc);
                documents[doc.location] = doc;
            }
        });
    }


    let results = index.search(query);
    let returned = [];
    for (let index in results) {
        let doc = documents[results[index].ref];
        doc.location = base_url + "/" + doc.location;
        returned.push(doc);
    }

    res.send(returned);
});

module.exports = router;
