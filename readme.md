### Boilerplate Searchable Datatable

This is a boilerplate jQuery datatable designed to be embedded in a news article. It's searchable and collapses for small screens.

Here's an (example)[https://s3.amazonaws.com/story-graphics/2019/school-districts/datatable-turnover/index.html]

### Embed

The datatable is designed to be displayed in an iframe created by (pym.js)[https://github.com/nprapps/pym.js/]. Pym ensures that the height of the iframe updates if the table does.

Here is an example of an embed script that uses pym to display this datatable:

```
<div id="container"></div>
<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script>var pymParent = new pym.Parent('container', 'https://s3.amazonaws.com/story-graphics/2019/school-districts/datatable-turnover/index.html', {});</script>
```
