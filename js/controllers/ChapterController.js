app.controller('ChapterController', ['$scope', 'books', '$routeParams', function ($scope, books, $routeParams) {
    books.success(function (data) {
        // Your code here 
        $scope.book = data[$routeParams.bookId];
        $scope.chapter = $scope.book.chapters[$routeParams.chapterId]

        // If there no more chapters left, go back to the bookshelf view
        if ($routeParams.chapterId >= $scope.book.chapters.length - 1) {
            $scope.nextChapterIndex = "#";
        }
        //code for updated version
        //if ( $routeParams.chapterId == 0) { $scope.backUrl = "#/books/{{ currentBookIndex }}"; }
        //else { $scope.backUrl = "#/books/{{ currentBookIndex }}/chapters/{{ currentChapterIndex - 1 }}"; }
    });
    

    // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
    $scope.currentBookIndex = parseInt($routeParams.bookId);
    $scope.currentChapterIndex = parseInt($routeParams.chapterId);
    $scope.nextChapterIndex = $scope.currentChapterIndex + 1;

    //Test element for angular-doesnt-boot-on-reload problem 
   // $scope.backUrl = "#/books/{{ currentBookIndex }}";

}]);
