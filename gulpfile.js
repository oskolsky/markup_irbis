//****************************************************************************************************
//
// .. VARIABLES
//
//****************************************************************************************************
var
  gulp = require('gulp'),
  plugin = require('gulp-load-plugins')(),
  path = require('./path.json');



//****************************************************************************************************
//
// .. TASKS
//
//****************************************************************************************************
//
// .. Clean
//
gulp.task('clean', function() {
  return gulp.src(path.build, {read: false})
    .pipe(plugin.clean());
});

//
// .. Layouts
//
gulp.task('layouts:dv/st', function() {
  return gulp.src([path.layouts.all, path.layouts.views.nope])
    .pipe(plugin.rubyHaml({doubleQuote: true}))
    .pipe(gulp.dest(path.build));
});

gulp.task('layouts:pr', ['layouts:dv/st'], function() {
  return gulp.src(path.layouts.build.all)
    .pipe(plugin.htmlReplace({javascripts: {src: path.javascripts.app, tpl: '<script src=\'%s\'></script>'}}))
    .pipe(gulp.dest(path.build));
});

//
// .. Stylesheets
//
gulp.task('stylesheets:dv', function() {
  return gulp.src(path.stylesheets.app)
    .pipe(plugin.rubySass({noCache: true}))
    .pipe(gulp.dest(path.stylesheets.dest));
});

gulp.task('stylesheets:st', ['stylesheets:dv'], function() {
  return gulp.src(path.stylesheets.build.app)
    .pipe(plugin.autoprefixer('last 2 versions', 'ie 9'))
    .pipe(plugin.csscomb('zen'))
    .pipe(gulp.dest(path.stylesheets.dest));
});

gulp.task('stylesheets:pr', ['stylesheets:st'], function() {
  return gulp.src(path.stylesheets.build.app)
    .pipe(plugin.cssmin())
    .pipe(gulp.dest(path.stylesheets.dest));
});

//
// .. Javascripts
//
gulp.task('javascripts:st', function() {
  return gulp.src([path.javascripts.all, path.javascripts.vendor.nope])
    .pipe(plugin.jshint())
    .pipe(plugin.jshint.reporter());
});

gulp.task('javascripts:pr', ['javascripts:st'], function() {
  return gulp.src(path.javascripts.list)
    .pipe(plugin.concat('application.js'))
    .pipe(plugin.uglify())
    .pipe(gulp.dest(path.javascripts.dest));
});

//
// .. Images
//
gulp.task('images', function() {
  gulp.src(path.images.all)
    .pipe(plugin.imagemin())
    .pipe(gulp.dest(path.images.dest));
});

//
// .. Copy
//
gulp.task('copy:stylesheets:vendor', function() {
  gulp.src(path.stylesheets.vendor.all)
    .pipe(gulp.dest(path.stylesheets.vendor.dest));
});

gulp.task('copy:javascripts', function() {
  gulp.src(path.javascripts.all)
    .pipe(gulp.dest(path.javascripts.dest));
});

gulp.task('copy:images', function() {
  gulp.src(path.images.all)
    .pipe(gulp.dest(path.images.dest));
});

gulp.task('copy:fonts', function() {
  gulp.src(path.fonts.all)
    .pipe(gulp.dest(path.fonts.dest));
});

gulp.task('copy:files', function() {
  gulp.src(path.files.list)
    .pipe(gulp.dest(path.build));
});

//
// .. Connect
//
gulp.task('connect', function() {
  plugin.connect.server({
    root: [path.build],
    port: 1111
  });
});

//
// .. Watch
//
gulp.task('watch', function() {
  gulp.src([path.layouts.all, path.layouts.views.nope], {read: false})
    .pipe(plugin.watch())
    .pipe(plugin.rubyHaml({doubleQuote: true}))
    .pipe(gulp.dest(path.build));
  gulp.watch(path.layouts.views.yep, ['layouts:dv/st']);
  gulp.watch(path.stylesheets.all, ['stylesheets:dv']);
  gulp.watch(path.stylesheets.vendor.all, ['copy:stylesheets:vendor']);
  gulp.watch(path.javascripts.all, ['copy:javascripts']);
  gulp.watch(path.images.all, ['copy:images']);
  gulp.watch(path.files.list, ['copy:files']);
});



//****************************************************************************************************
//
// .. RUN
//
//****************************************************************************************************
gulp.task('default', ['connect', 'watch']);

//
// .. Development
//
gulp.task('dv', ['clean'], function() {
  gulp.start(
    'layouts:dv/st',
    'stylesheets:dv',
    'copy:stylesheets:vendor',
    'copy:javascripts',
    'copy:images',
    'copy:fonts',
    'copy:files'
  );
});

//
// .. Staging
//
gulp.task('st', ['clean'], function() {
  gulp.start(
    'layouts:dv/st',
    'stylesheets:st',
    'javascripts:st',
    'images',
    'copy:stylesheets:vendor',
    'copy:javascripts',
    'copy:fonts',
    'copy:files'
  );
});

//
// .. Production
//
gulp.task('pr', ['clean'], function() {
  gulp.start(
    'layouts:pr',
    'stylesheets:pr',
    'javascripts:pr',
    'images',
    'copy:fonts',
    'copy:files'
  );
});