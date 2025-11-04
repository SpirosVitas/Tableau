<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New York City Parks | Tableau Project</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background-color: #f9fafb;
      margin: 0;
      font-family: system-ui, sans-serif;
    }
    header {
      background: #0d6efd;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    .tableauPlaceholder {
      width: 100%;
      height: 90vh;
      margin: 0 auto;
    }
  </style>
</head>

<body>
  <header>
    <h1>New York City Parks</h1>
  </header>

  <div class='tableauPlaceholder' id='viz1762266627655' style='position: relative'>
    <noscript>
      <a href='#'>
        <img alt='New York City Parks All'
          src='https://public.tableau.com/static/images/Ne/NewYorkCityParks_17622597102260/NewYorkCityParks/1_rss.png'
          style='border:none' />
      </a>
    </noscript>
    <object class='tableauViz' style='display:none;'>
      <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
      <param name='embed_code_version' value='3' />
      <param name='name' value='NewYorkCityParks_17622597102260/NewYorkCityParks' />
      <param name='tabs' value='no' />
      <param name='toolbar' value='yes' />
      <param name='static_image'
        value='https://public.tableau.com/static/images/Ne/NewYorkCityParks_17622597102260/NewYorkCityParks/1.png' />
      <param name='animate_transition' value='yes' />
      <param name='display_static_image' value='yes' />
      <param name='display_spinner' value='yes' />
      <param name='display_overlay' value='yes' />
      <param name='display_count' value='yes' />
      <param name='language' value='en-US' />
    </object>
  </div>

  <script type='text/javascript'>
    var divElement = document.getElementById('viz1762266627655');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  </script>

</body>
</html>
