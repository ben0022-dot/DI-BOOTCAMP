<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Giphy Randomizer</title>
    <style>
        .gif-container { display: inline-block; margin: 10px; vertical-align: top; }
        img { display: block; max-width: 200px; margin-bottom: 5px; }
    </style>
</head>
<body>

    <form id="searchForm">
        <input type="text" id="categoryInput" placeholder="Enter category (e.g. sun)" required>
        <button type="submit">Fetch Gif</button>
        <button type="button" id="deleteAll">Delete All</button>
    </form>

    <div id="results"></div>

    <script src="script.js"></script>
</body>
</html>