tabulous.js
===========

A jQuery tabs module for todays web!

### Documentation

Tabulous.js can be used with any contents you choose in the tabs and it couldn't be more simpler to use.

#### ..:: Getting Started

##### Include the relevant files

Firstly include jQuery and the tabulous.css and tabulous.js files. Place these before `<head>` section

  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="tabulous.js"></script>
	<script type="text/javascript" src="js.js"></script>
					

##### Create the tabs

`````
  <div class="tabs">
  	<ul>
			<li class="item-tab"><a class="link-tab" href="#item-tab-container-1" title="">Tab 1</a></li>
			<li class="item-tab"><a class="link-tab" href="#item-tab-container-2" title="">Tab 2</a></li>
			<li class="item-tab"><a class="link-tab" href="#item-tab-container-3" title="">Tab 3</a></li>
		</ul>
		<div class="tabs-container">
			<div id="item-tab-container-1">
				<!--tab content-->
			</div>
			<div id="item-tab-container-2">
				   <!--tab content-->
			</div>
			<div id="item-tab-container-3">
				    <!--tab content-->
			</div>
		</div><!--End tabs container-->	
  </div><!--End tabs-->
`````
##### Initiate the plugin

Once you have created your tabs you will need to initiate the plugin.

At its most basic level you can initiate the plugin like:

`````					
	$(document).ready(function ($) {

    $('.tabs').tabulous();  

});
`````
					

If you want to initiate the plugin with options then you can do so like:

`````
$('.tabs').tabulous({
      effect: 'scale'
    });	
`````

#### ..:: Options

<table>
  						<thead>
								<tr>
									<th>Variable</th>
									<th>Default Value</th>
									<th>Description</th>
									<th>Valid Options</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>effect</td>
									<td>scale</td>
									<td>The effect to use for the transition</td>
									<td>scale / slideLeft / scaleUp / flip</td>
								</tr>
							

								
							</tbody>
						</table>
