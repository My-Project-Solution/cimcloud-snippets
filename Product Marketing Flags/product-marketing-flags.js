<script type="text/html" id="catalog.flags">
  <!-- ko if: searchfields["searchfield1"].show() -->
  <div id="flag1" class="product_flags">
	<img width="50px" data-bind="attr: {src: utils.buildImagePath(searchfields['searchfield1'].value()) }" />
  </div>
  <!-- /ko -->
  <!-- ko if: searchfields["searchfield2"].show() -->
  <div id="flag2" class="product_flags">
	<img width="50px" data-bind="attr: {src: utils.buildImagePath(searchfields['searchfield2'].value()) }" />
  </div>
  <!-- /ko --><!-- ko if: searchfields["searchfield3"].show() -->
  <div id="flag3" class="product_flags">
	<img width="50px" data-bind="attr: {src: utils.buildImagePath(searchfields['searchfield3'].value()) }" />
  </div>
  <!-- /ko -->
  <!-- ko if: searchfields["searchfield4"].show() -->
  <div id="flag4" class="product_flags">
	<img width="50px" data-bind="attr: {src: utils.buildImagePath(searchfields['searchfield4'].value()) }" />
  </div>
  <!-- /ko -->
</script>
