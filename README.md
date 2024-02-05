# File-Manager

## Technical requirements

- No external dependencies should be required
- Use 20 LTS version of Node.js
- The program is started by npm-script start in following way:

`npm run start -- --username=your_username`

`your_username` - It can't be empty

Input example:

`npm run start -- --username=User`

### List of operations and their syntax:

**IMPORTANT**

- If there is a space in the name of the file or folder, then the path must be enclosed in double quotes.

_Example of a path containing a space in the folder name to a file **text.txt** to read it:_

Input example:

`cat "c:\users\username\folder name\text.txt"`

##### Navigation & working directory

- Go upper from current directory

`up`

- Go to dedicated folder from current directory

`cd path_to_directory`

- Print in console list of all files and folders in current directory

`ls`

##### Basic operations with files

- Read file and print it's content in console

`cat path_to_file`

- Create empty file in current working directory

`add new_file_name`

- Rename file

`rn path_to_file new_filename`

- Copy fil

`cp path_to_file path_to_new_directory`

- Move file

`mv path_to_file path_to_new_directory`

- Delete file

`rm path_to_file`

##### Operating system info

- Get EOL

`os --EOL`

- Get host machine CPUs info

`os --cpus`

- Get home directory and print it to console

`os --homedir`

- Get current system user name

`os --username`

- Get CPU architecture

`os --architecture`

##### Hash calculation

- Calculate hash for file and print it into console

`hash path_to_file`

##### Compress and decompress operations

- Compress file

`compress path_to_file path_to_destination`

- Decompress file

`decompress path_to_file path_to_destination`
