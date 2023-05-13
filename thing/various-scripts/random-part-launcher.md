# Random Part Launcher

```lua
function GetRandomNumber(max, min, probabilityPower)
	probabilityPower = probabilityPower or 2
	local randomizer = Random.new()
	local randomDouble = randomizer:NextNumber()
	local result = math.floor(min + (max + 1 - min) * (math.pow(randomDouble, probabilityPower)))
	return result
end
function round(num, n)
	local mult = 10^(n or 0)
	return math.floor(num * mult + 0.5) / mult
end
local luck = 0.05
-- removed the Spawner to save on space
Spawner:PivotTo(owner.Character.HumanoidRootPart.CFrame * CFrame.new(0, 0, -4) * CFrame.Angles(0, math.pi, 0))
local sounds = {
	12221967;
	12222200;
	12222253;
	12222152;
	12221944;
	12222183;
	12222170;
	12222084;
	12222132;
	12221984;
	12222005;
	12222054;
	12222046;
	12222076;
	12222140;
	12222106;
	11900833;
	12221996;
	12221976;
	12222058;
}
function makeSound()
	local S = Instance.new("Sound", Part)
	S.PlayOnRemove = true
	S.SoundId = "rbxassetid://" .. tostring(sounds[math.random(1, #sounds)])
	S.Volume = 1
	S.PlaybackSpeed = Random.new():NextNumber(0.75, 1.25)
	game:GetService("Debris"):AddItem(S, 0)
end
local shapes = Enum.PartType:GetEnumItems()
local materials = Enum.Material:GetEnumItems()
local luckPrice = 2
local mul = 0.5
local parts = 0
local money = 0
local d = tick()
ClickDetector.MouseClick:Connect(function()
	parts += 1
	makeSound()
	local p = Instance.new("Part")
	local n = GetRandomNumber(1, #materials, luck)
	p.Material = materials[n]
	p.Position = Part.Position
	p.Shape = shapes[math.random(1,#shapes)]
	p.Size = Vector3.new(math.random(1, 4), math.random(1, 4), math.random(1, 4))
	p.Transparency = math.random()
	p.Color = Color3.new(math.random(), math.random(), math.random())
	local c = p.Color
	p.Massless = true
	p.Velocity = (Part.CFrame.LookVector * 400) + Vector3.new(0, 100, 0)
	p.Parent = script
	if parts % 200 == 0 then
		money += n * mul * 10
		task.spawn(function()
			local i = 0
			while p:IsDescendantOf(workspace) do
				i += 1
				if i % 30 then
					p.Material = Enum.Material.Neon
					p.Color = Color3.new(1, 0.5, 0)
				else
					p.Material = materials[n]
					p.Color = c
				end
				task.wait()
			end
		end)
		p.Touched:Connect(function(hit)
			if not hit:IsDescendantOf(script) then
				local parts = workspace:GetPartBoundsInRadius(p.Position, 96)
				for i,v in pairs(parts) do
					pcall(function()
						if not v:IsDescendantOf(script) then
							v.Anchored = false
							v.Massless = true 
						end
					end)
				end
				local Explosion = Instance.new("Explosion")
				Explosion.BlastRadius = 96
				Explosion.BlastPressure = 500000
				Explosion.TimeScale = 1
				Explosion.Position = p.Position
				Explosion.Parent = script
				p:Destroy()
			end
		end)
	else
		money += n * mul
	end
	game:GetService("Debris"):AddItem(p, 10)
end)
TextButton.MouseButton1Click:Connect(function()
	if money >= luckPrice then
		money -= luckPrice
		luckPrice *= 1.25
		mul *= 1.075
		luck += 0.05
	end
end)
while true do
	TextBox.Text = "Luck: "..tostring(round(luck, 2)).."\nMultiplier: "..tostring(round(mul, 2)).."\nMoney: $"..tostring(round(money, 2)).."\nPrice of Luck: $"..tostring(round(luckPrice, 2)).."\nParts until explosion: "..tostring(200 - (parts % 200))
	task.wait()
end
```
