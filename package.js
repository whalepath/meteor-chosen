Package.describe({
    summary: "Chosen Js for Meteor"
});

Package.on_use(function (api) {
    api.add_files([
        'chosen.proto.js'
    ], 'client');
});
