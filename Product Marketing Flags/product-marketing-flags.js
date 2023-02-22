
<script type="text/html" id="catalog.flags">
  <!-- ko if: searchfields["searchfield1"] && searchfields["searchfield1"].show() -->
  <div id="flag1" class="product_flags">
    <span data-bind="text: searchfields['searchfield1'].value()"></span>
  </div>
  <!-- /ko -->
  <!-- ko if: searchfields["searchfield2"] && searchfields["searchfield2"].show() -->
  <div id="flag2" class="product_flags">
	<span data-bind="text: searchfields['searchfield2'].value()"></span>
  </div>
  <!-- /ko -->
  <!-- ko if: searchfields["searchfield3"] && searchfields["searchfield3"].show() -->
  <div id="flag3" class="product_flags">
	<span data-bind="text: searchfields['searchfield3'].value()"></span>
  </div>
  <!-- /ko -->
  <!-- ko if: searchfields["searchfield4"] && searchfields["searchfield4"].show() -->
  <div id="flag4" class="product_flags">
	<span data-bind="text: searchfields['searchfield4'].value()"></span>
  </div>
  <!-- /ko -->
</script>

<style>
  .product_flags{
  	font-family: 'Heebo';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    border-radius: 5px;
    padding: 2px 8px;
    color: #fff;
  }
  div#flag1 {
    background-color: #D20000;
  }
  div#flag2 {
    background-color: #FFC700;
  	color: #000;
  }
  div#flag3 {
    background-color: #A39161;
  }
  div#flag4 {
    background-color: #008C99;
  }
</style>
