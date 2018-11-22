var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var slash = require("slash");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var pump = require("pump");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");

var paths = {
  scriptSource: "./src/scripts/*.js",
  scss: "./src/sass/**/*.scss",
  dist: "./dist"
};

//minification - copy

gulp.task("compress", function(cb) {
  pump([gulp.src("lib/*.js"), uglify(), gulp.dest("dist")], cb);
});

gulp.task("copy:js", function() {
  return gulp.src([paths.scriptSource]).pipe(gulp.dest(paths.dist));
});

gulp.task("both:tasks", ["compress", "copy:js"]);

//debug gulp task

gulp.task("default", ["min:js"]);

//babel

gulp.task("babel:ToES5", () => {
  return gulp
    .src([paths.scriptSource + "es6*.js"])
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ["es2015"] }))
    .pipe(concat("es5bundle.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dist));
});

//compile sass

gulp.task("compile:sass", function() {
  gulp
    .src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(paths.dist));
});

//watch sass

gulp.task("watch:sass", function() {
  gulp.watch(paths.scss, ["compile:sass"]);
});

//upload to SP

var spsaveCoreOption = {
  siteUrl: "http://sp2016",
  folder: "Shared%20Documents",
  checkin: true,
  checkinType: 1,
  flatten: false,
  notification: true
};

var spsaveCredential = {
  username: "spdom\\administrator",
  password: "Pa$$w0rd"
};

gulp.task("upload", function() {
  return gulp
    .src("./dist/**/*")
    .pipe(spsave(spsaveCoreOption, spsaveCredential));
});
