Package.describe({
    summary: "Chosen Js for Meteor"
});

Package.on_use(function (api) {
    api.add_files([
        'chosen.proto.js',
        'chosen.proto.min.js',
        'chosen.css',
        'chosen.min.css',
        'chosen-sprite.png',
        'chosen-sprite@2x.png',
    ], 'client');
});
