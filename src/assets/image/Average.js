/**
 * @author syt123450 / https://github.com/syt123450
 * @author lq3297401 / https://github.com/lq3297401
 */

let AverageData = ( function() {
    return "data:image/jpeg;base64,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SU0nEAAAAAAACgABAAAAAAAAAAE4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAA4QklNBAIAAAAAAAIAADhCSU0EMAAAAAAAAQEAOEJJTQQtAAAAAAAGAAEAAAAEOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0MAAAAGAAAAAAAAAAAAAACAAAAAgAAAAAcAYQB2AGUAcgBhAGcAZQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAIAAAAAAUmdodGxvbmcAAACAAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAACAAAAAAFJnaHRsb25nAAAAgAAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAAAQAAAAAAAE1zZ2VURVhUAAAAAQAAAAAABmFsdFRhZ1RFWFQAAAAB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AAAAAAAHAAgBAQABAQD/4Q30aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSI0RTI0REEwMEM1NDYyNkZFMDczMjBCQzNBQTc4OUJEMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjN2ZjZjY1NS1iNTI4LTQ4NGItYTUzNC1jOGQ0MjI3ZmVjYTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNEUyNERBMDBDNTQ2MjZGRTA3MzIwQkMzQUE3ODlCRDEiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTAtMDlUMTg6MjQtMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEwLTI5VDAxOjA5OjQxLTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTEwLTI5VDAxOjA5OjQxLTA3OjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzdmY2Y2NTUtYjUyOC00ODRiLWE1MzQtYzhkNDIyN2ZlY2EzIiBzdEV2dDp3aGVuPSIyMDE4LTEwLTI5VDAxOjA5OjQxLTA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+REFDNjIyOUY1RUJFNjkyM0M0NkQ1MDAxMEM2NUE2NEI8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MTJmNmM5NjItMTg0OS0xMTdjLWExMjktZDhhY2UxZjkwMThhPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ4Zjc3YTVjLWZkZjItMTE3Yi04ZTRiLTkzODAxNDMzYjRkODwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4AIUFkb2JlAGRA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";
} )();

export { AverageData };