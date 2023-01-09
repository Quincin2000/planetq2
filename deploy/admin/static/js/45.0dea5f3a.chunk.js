(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[45],{490:function(e,s,t){"use strict";t.r(s);s.default={common:{or:"or",cancel:"Cancel",reset:"Reset",save:"Save",search:"Search",edit:"Edit",new:"New",export:"Export to Excel",noDataToExport:"No data to export",import:"Import",discard:"Discard",yes:"Yes",no:"No",pause:"Pause",areYouSure:"Are you sure?",view:"View",destroy:"Delete",mustSelectARow:"Must select a row",start:"Start",end:"End",select:"Select",continue:"Continue",filters:"Filters"},app:{title:"PlanetQ"},api:{menu:"API"},entities:{musicTrack:{name:"musicTrack",label:"Music Tracks",menu:"Music Tracks",exporterFileName:"musicTrack_export",list:{menu:"Music Tracks",title:"Music Tracks"},create:{success:"Music Track successfully saved"},update:{success:"Music Track successfully saved"},destroy:{success:"Music Track successfully deleted"},destroyAll:{success:"Music Track(s) successfully deleted"},edit:{title:"Edit Music Track"},fields:{id:"Id",trackName:"TrackName",artist:"Artist",album:"Album",cover:"Cover",audioTrack:"AudioTrack",externalSourceUrl:"ExternalSourceUrl",active:"Active",createdAt:"Created at",updatedAt:"Updated at",createdAtRange:"Created at"},enumerators:{},placeholders:{album:"Album",externalSourceUrl:"Youtube or Sound Cloud Url"},hints:{album:"Music Album",externalSourceUrl:"Youtube (https://www.youtube.com/watch?v=AJtDXIazrMo), Soundcloud (https://soundcloud.com/andiecase/ellie-goulding-love-me-like-you-do-andie-case-cover)"},new:{title:"New Music Track"},view:{title:"View Music Track"},importer:{title:"Import Music Tracks",fileName:"musicTrack_import_template",hint:"Files/Images columns must be the URLs of the files separated by space."}},regularSchedule:{name:"regularSchedule",label:"Regular Schedules",menu:"Regular Schedules",exporterFileName:"regularSchedule_export",list:{menu:"Regular Schedules",title:"Regular Schedules"},create:{success:"Regular Schedule successfully saved"},update:{success:"Regular Schedule successfully saved"},destroy:{success:"Regular Schedule successfully deleted"},destroyAll:{success:"Regular Schedule(s) successfully deleted"},edit:{title:"Edit Regular Schedule"},fields:{id:"Id",day:"Day",musicTrack:"Music Track(s)",createdAt:"Created at",updatedAt:"Updated at",createdAtRange:"Created at"},enumerators:{day:{Monday:"Monday",Tuesday:"Tuesday",Wednesday:"Wednesday",Thursday:"Thursday",Friday:"Friday",Saturday:"Saturday",Sunday:"Sunday"}},placeholders:{day:"Weekday",musicTrack:"Music Track"},hints:{},new:{title:"New Regular Schedule"},view:{title:"View Regular Schedule"},importer:{title:"Import Regular Schedules",fileName:"regularSchedule_import_template",hint:"Files/Images columns must be the URLs of the files separated by space."}},specialSchedule:{name:"specialSchedule",label:"Special Schedules",menu:"Special Schedules",exporterFileName:"specialSchedule_export",list:{menu:"Special Schedules",title:"Special Schedules"},create:{success:"Special Schedule successfully saved"},update:{success:"Special Schedule successfully saved"},destroy:{success:"Special Schedule successfully deleted"},destroyAll:{success:"Special Schedule(s) successfully deleted"},edit:{title:"Edit Special Schedule"},fields:{id:"Id",description:"Description",scheduleDateRange:"Schedule Date",scheduleDate:"Schedule Date",musicTrack:"Music Track(s)",createdAt:"Created at",updatedAt:"Updated at",createdAtRange:"Created at"},enumerators:{},placeholders:{description:"Description",musicTrack:"Music Track(s)"},hints:{},new:{title:"New Special Schedule"},view:{title:"View Special Schedule"},importer:{title:"Import Special Schedules",fileName:"specialSchedule_import_template",hint:"Files/Images columns must be the URLs of the files separated by space."}}},auth:{tenants:"Workspaces",profile:{title:"Profile",success:"Profile successfully updated"},rememberMe:"Remember me",forgotPassword:"Forgot password",signin:"Sign in",signup:"Sign up",signout:"Sign out",alreadyHaveAnAccount:"Already have an account? Sign in.",createAnAccount:"Don't have an account? Create one.",social:{header:"or sign in with Social Media",signinWithGoogle:"Sign in with Google",errors:{"auth-invalid-provider":"This email is already registered to another provider.","auth-no-email":"The email associated with this account is private or inexistent."}},signinWithAnotherAccount:"Sign in with another account",emailUnverified:{message:"Please confirm your email at <strong>{0}</strong> to continue.",submit:"Resend email verification"},emptyPermissions:{message:"You have no permissions yet. Wait for the admin to grant you privileges."},passwordResetEmail:{message:"Send password reset email",error:"Email not recognized"},passwordReset:{message:"Reset password"},passwordChange:{title:"Change Password",success:"Password successfully changed",mustMatch:"Passwords must match"},emailAddressVerificationEmail:{error:"Email not recognized"},verificationEmailSuccess:"Verification email successfully sent",passwordResetEmailSuccess:"Password reset email successfully sent",passwordResetSuccess:"Password successfully changed",verifyEmail:{success:"Email successfully verified.",message:"Just a moment, your email is being verified..."}},roles:{admin:{label:"Admin",description:"Full access to all resources"},custom:{label:"Custom Role",description:"Custom role access"}},user:{fields:{id:"Id",avatars:"Avatar",email:"Email",emails:"Email(s)",fullName:"Name",firstName:"First Name",lastName:"Last Name",status:"Status",phoneNumber:"Phone Number",role:"Role",createdAt:"Created at",updatedAt:"Updated at",roleUser:"Role/User",roles:"Roles",createdAtRange:"Created at",password:"Password",oldPassword:"Old Password",newPassword:"New Password",newPasswordConfirmation:"New Password Confirmation",rememberMe:"Remember me"},status:{active:"Active",invited:"Invited","empty-permissions":"Waiting for Permissions"},invite:"Invite",validations:{email:"Email ${value} is invalid"},title:"Users",menu:"Users",doAddSuccess:"User(s) successfully saved",doUpdateSuccess:"User successfully saved",exporterFileName:"users_export",doDestroySuccess:"User successfully deleted",doDestroyAllSelectedSuccess:"Users successfully deleted",edit:{title:"Edit User"},new:{title:"Invite User(s)",titleModal:"Invite User",emailsHint:"Separate multiple email addresses using the comma character."},view:{title:"View User",activity:"Activity"},importer:{title:"Import Users",fileName:"users_import_template",hint:"Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space."},errors:{userAlreadyExists:"User with this email already exists",userNotFound:"User not found",revokingOwnPermission:"You can't revoke your own admin permission"}},tenant:{name:"tenant",label:"Workspaces",menu:"Workspaces",list:{menu:"Workspaces",title:"Workspaces"},create:{button:"Create Workspace",success:"Workspace successfully saved"},update:{success:"Workspace successfully saved"},destroy:{success:"Workspace successfully deleted"},destroyAll:{success:"Workspace(s) successfully deleted"},edit:{title:"Edit Workspace"},fields:{id:"Id",name:"Name",url:"URL",tenantName:"Workspace Name",tenantId:"Workspace",tenantUrl:"Workspace URL",plan:"Plan"},enumerators:{},new:{title:"New Workspace"},invitation:{view:"View Invitations",invited:"Invited",accept:"Accept Invitation",decline:"Decline Invitation",declined:"Invitation successfully declined",acceptWrongEmail:"Accept Invitation With This Email"},select:"Select Workspace",validation:{url:"Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number)."}},plan:{menu:"Plans",title:"Plans",free:{label:"Free",price:"$0"},growth:{label:"Growth",price:"$10"},enterprise:{label:"Enterprise",price:"$50"},pricingPeriod:"/month",current:"Current Plan",subscribe:"Subscribe",manage:"Manage Subscription",cancelAtPeriodEnd:"This plan will be canceled at the end of the period.",somethingWrong:"There is something wrong with your subscription. Please go to manage subscription for more details.",notPlanUser:"You are not the manager of this subscription."},auditLog:{menu:"Audit Logs",title:"Audit Logs",exporterFileName:"audit_log_export",entityNamesHint:"Separate multiple entities using the comma character.",fields:{id:"Id",timestampRange:"Period",entityName:"Entity",entityNames:"Entities",entityId:"Entity ID",action:"Action",values:"Values",timestamp:"Date",createdByEmail:"User Email"}},settings:{title:"Settings",menu:"Settings",save:{success:"Settings successfully saved. The page will reload in {0} seconds for changes to take effect."},fields:{theme:"Theme",logos:"Logo",backgroundImages:"Background Image"},colors:{default:"Dark",light:"Light",cyan:"Cyan","geek-blue":"Geek Blue",gold:"Gold",lime:"Lime",magenta:"Magenta",orange:"Orange","polar-green":"Polar Green",purple:"Purple",red:"Red",volcano:"Volcano",yellow:"Yellow"}},dashboard:{menu:"Dashboard",message:"This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.",charts:{day:"Day",red:"Red",green:"Green",yellow:"Yellow",grey:"Grey",blue:"Blue",orange:"Orange",months:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July"},eating:"Eating",drinking:"Drinking",sleeping:"Sleeping",designing:"Designing",coding:"Coding",cycling:"Cycling",running:"Running",customer:"Customer"}},errors:{backToHome:"Back to home",403:"Sorry, you don't have access to this page",404:"Sorry, the page you visited does not exist",500:"Sorry, the server is reporting an error",429:"Too many requests. Please try again later.",forbidden:{message:"Forbidden"},validation:{message:"An error occurred"},defaultErrorMessage:"Ops, an error occurred"},preview:{error:"Sorry, this operation is not allowed in preview mode."},validation:{mixed:{default:"${path} is invalid",required:"${path} is required",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:function(e){var s=e.path,t=e.type;e.value,e.originalValue;return"".concat(s," must be a ").concat(t)}},string:{length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string",selected:"${path} must be selected"},number:{min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",notEqual:"${path} must be not equal to ${notEqual}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},date:{min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},boolean:{},object:{noUnknown:"${path} field cannot have keys not specified in the object shape"},array:{min:function(e){var s=e.min,t=e.path;return 1===s?"".concat(t," is required"):"".concat(t," field must have at least ").concat(s," items")},max:"${path} field must have less than or equal to ${max} items"}},fileUploader:{upload:"Upload",image:"You must upload an image",size:"File is too big. Max allowed size is {0}",formats:"Invalid format. Must be one of: {0}."},importer:{line:"Line",status:"Status",pending:"Pending",imported:"Imported",error:"Error",total:"{0} imported, {1} pending and {2} with error",importedMessage:"Processed {0} of {1}.",noNavigateAwayMessage:"Do not navigate away from this page or import will be stopped.",completed:{success:"Import completed. All rows were successfully imported.",someErrors:"Processing completed, but some rows were unable to be imported.",allErrors:"Import failed. There are no valid rows."},form:{downloadTemplate:"Download the template",hint:"Click or drag the file to this area to continue"},list:{discardConfirm:"Are you sure? Non-imported data will be lost."},errors:{invalidFileEmpty:"The file is empty",invalidFileExcel:"Only excel (.xlsx) files are allowed",invalidFileUpload:"Invalid file. Make sure you are using the last version of the template.",importHashRequired:"Import hash is required",importHashExistent:"Data has already been imported"}},autocomplete:{loading:"Loading...",noOptions:"No data found"},imagesViewer:{noImage:"No image"},table:{noData:"No records found",loading:"Loading..."},pagination:{items_per_page:"/ page",jump_to:"Goto",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"}}}}]);