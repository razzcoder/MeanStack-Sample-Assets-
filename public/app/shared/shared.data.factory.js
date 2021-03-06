angular.module('CommonData',[])
    
    .factory('CommonDataFactory', function() {
    var CommonDataFactory = {};
        CommonDataFactory.setDeskNo = function(DeskNo) {
            CommonDataFactory.DeskNo = DeskNo;
            sessionStorage.DeskNo = DeskNo;
        };
        CommonDataFactory.getDeskNo = function() {
            return sessionStorage.DeskNo;
        };
        CommonDataFactory.setProcessor=function(processor){
            CommonDataFactory.processor=processor;
            sessionStorage.processor=JSON.stringify(processor);
        };
        CommonDataFactory.getProcessor=function(){
            if(sessionStorage.processor)
                return sessionStorage.processor;
            else
                return "";
        };
        CommonDataFactory.setRAM=function(RAM){
            CommonDataFactory.RAM=RAM;
            sessionStorage.RAM=JSON.stringify(RAM);
        };
        CommonDataFactory.getRAM=function(){
            if(sessionStorage.RAM)
                return sessionStorage.RAM;
            else
                return "";
        };
        CommonDataFactory.setHDD=function(HDD){
            CommonDataFactory.HDD=HDD;
            sessionStorage.HDD=JSON.stringify(HDD);
        };
        CommonDataFactory.getHDD=function(){
            if(sessionStorage.HDD)
             return sessionStorage.HDD;
            else
                return "";
        };
         CommonDataFactory.setOSVersion=function(OSVersion){
            CommonDataFactory.OSVersion=OSVersion;
             sessionStorage.OSVersion=JSON.stringify(OSVersion);
        };
        CommonDataFactory.getOSVersion=function(){
            if(sessionStorage.OSVersion)
             return sessionStorage.OSVersion;
            else
                return "";
        };
        CommonDataFactory.setUserID=function(UserName){
            CommonDataFactory.UserId=UserName;
            sessionStorage.UserId=UserName;
            
        }
        CommonDataFactory.getUserID=function(){
            if(sessionStorage.UserId)
            return sessionStorage.UserId;
            else
            return "";
            
        }
  CommonDataFactory.setLocation = function(Location) {
            CommonDataFactory.Location = Location;
            sessionStorage.Location = Location;
       };
       CommonDataFactory.getLocation = function() {
            return sessionStorage.Location;
       };
CommonDataFactory.setIndexValue = function(index) {
            CommonDataFactory.index = index;
            sessionStorage.index = index;
       };
       CommonDataFactory.getIndexValue = function() {
            return sessionStorage.index;
       };
      
    return CommonDataFactory;
});
