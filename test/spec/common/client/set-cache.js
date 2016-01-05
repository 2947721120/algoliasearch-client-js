'use strict';

var test = require('tape');

test('cache is not empty object when specified in opts', function(t) {
  t.plan(1);

  var opts = {
    cache: {
      'path/for/query': {}
    }
  };

  var algoliasearch = require('../../../../');
  var search = algoliasearch('applicationID', 'apiKey', opts);

  t.deepEqual(
    search.cache,
    opts.cache,
    'Specified cache is set as client cache'
  );
});
