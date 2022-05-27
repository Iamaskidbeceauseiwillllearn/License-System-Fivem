--[[                                                                                                                                                                                 
███    ███ ███████     ███████  ██████ ██████  ██ ██████  ████████ ███████ 
████  ████ ██          ██      ██      ██   ██ ██ ██   ██    ██    ██      
██ ████ ██ ███████     ███████ ██      ██████  ██ ██████     ██    ███████ 
██  ██  ██      ██          ██ ██      ██   ██ ██ ██         ██         ██ 
██      ██ ███████     ███████  ██████ ██   ██ ██ ██         ██    ███████         
DISCORD: https://discord.gg/GaA2BvdsKG
]]

--This in Your Server.lua

local resourceName = GetCurrentResourceName()
PerformHttpRequest('http://YourIP/myip.php', function(err, result, headers)
local reason = result
ip = reason
end, 'GET', "")

PerformHttpRequest('http://YourIP/check.php', function(err, result, headers)
local reason = result
if reason == 'Authenticated' then
    print("You have a license")
else
    print("You dont have a license")
    Citizen.Wait(100)
  os.exit()
end
end)

--[[
INFO EN:
os.exit() is a shit function so use another function.

CRACK:
function os.exit()
end
]]