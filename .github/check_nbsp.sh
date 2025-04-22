#!/bin/bash

DIRECTORY="${1:-.}"      # Default to current directory if not provided
THRESHOLD="${2:-1}"      # Default threshold for nbsp per line

found=0

# Find all .md files and check each
while read -r file; do
  awk -v threshold="$THRESHOLD" '
  {
    n = gsub(" ", ""); # count of NBSPs per line
    if (n > threshold) {
      printf("File: %s | Line %d | Non-breaking spaces: %d\n", FILENAME, NR, n);
      exit_code = 1;
    }
  }
  END { exit (exit_code ? 1 : 0) }
  ' "$file"

  # If awk returned non-zero (found lines), set global flag
  if [ $? -ne 0 ]; then
    found=1
  fi
done <<< "$(find "$DIRECTORY" -type f -name '*.md')"

# If any files were found with too many non-breaking spaces, exit with error
if [ $found -ne 0 ]; then
  echo "Error: Found non-breaking spaces in files exceeding the threshold of $THRESHOLD."
  exit 1
else
  echo "No files found with non-breaking spaces exceeding the threshold of $THRESHOLD."
fi
