'use strict';
angular
    .module('datetimepicker', [])
    .provider('datetimepicker', function() {
        var default_options = {};
        this.setOptions = function(options) {
            default_options = options;
        };
        this.$get = function() {
            return {
                getOptions: function() {
                    return default_options;
                }
            };
        };
    })
    .directive('datetimepicker', [
        '$timeout',
        'datetimepicker',
        function($timeout,
            datetimepicker) {
            var default_options = datetimepicker.getOptions();
            return {
                require: '?ngModel',
                restrict: 'AE',
                scope: {
                    datetimepickerOptions: '@'
                },
                link: function($scope, $element, $attrs, ngModelCtrl) {
                    var passed_in_options = $scope.$eval($attrs.datetimepickerOptions);
                    var options = jQuery.extend({}, default_options, passed_in_options);
                    $element
                        .on('dp.change', function(e) {
                            if (ngModelCtrl) {
                                $timeout(function() {
                                    ngModelCtrl.$setViewValue(e.target.value);
                                });
                            }
                        })
                        .on('dp.show', function (e) {
                            var that = this;
                            if (ngModelCtrl) {
                                $timeout(function() {
                                    $(that).data("DateTimePicker").date(e.target.value);
                                });
                            }
                        })
                        .datetimepicker(options);
                }
            };
        }
    ]);
