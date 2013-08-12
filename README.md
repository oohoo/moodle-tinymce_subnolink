Remove Subordinate TinyMCE Plugin
===============================================================================


This moodle tinyMCE plugin is needed to run the MSM module.
(link to the MSM module git repository:  https://github.com/OohooDevTeam/moodle-mod_msm)

The Remove Subordinate plugin behaves similar to the  moodlenolink plugin for the TinyMCE editor in a way that it
removes the anchor element wrapping around the highlighted text.  However, it is different from the moodlenolink
element in that due to subordinate having additional contents in form of a popup window, this plugin also needs to
delete all associated  content when removing the anchor element.  

========================================================================================================================

Installation:

1. Donwload this plugin as a zip file.
2. Extract the files from the zip file then rename the folder to "moodlesubnolink" then rezip the file as "moodlesubnolink.zip".
3. To install this file in moodle, go to:
        Site Administration --> Plugins --> Install add-ons
4. Upload the "moodlesubnolink.zip" file as TinyMCE Plugin Type.
5. Navigate to:
        Site Administration --> Plugins --> Text Editors --> TinyMCE HTML Editor --> General Settings
6. Ensure that the Remove Subordinate Plugin is enabled.
7. To add the moodlesubnolink button to the editor, add the "moodlesubnolink" keyword withint the Editor Toolbar field.
8. When creating content in MSM module, remove subordinate button should now appear in the tinyMCE.

** This plugin is developed to be used in the MSM module **

========================================================================================================================

Prerequisites:

- MSM module --> repository link: https://github.com/OohooDevTeam/moodle-mod_msm
- Matheditor TinyMCE plugin --> https://github.com/oohoo/moodle-tinymce_matheditor
- Subordinate TinyMCE Plugin: https://github.com/gayoung/moodle-tinymce_subordinate