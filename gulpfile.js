var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require("gulp-open");

var PORT_NUMBER = 9000;

gulp.task('html', function () {
    gulp.src('./slides/*.html')
        .pipe(connect.reload());
});

gulp.task("open", function(){
    gulp.src("./slides/index.html")
        .pipe(open("", {
            url: "http://localhost:" + PORT_NUMBER,
            app: "google chrome"
        }));
});

gulp.task('watch', function () {
    gulp.watch(['./slides/*.html'], ['html']);
});


gulp.task('connect', function() {
    connect.server({
        root: 'slides',
        port: PORT_NUMBER,
        livereload: true
    });
});

// default task
gulp.task('default', ['open', 'connect', 'watch']);
