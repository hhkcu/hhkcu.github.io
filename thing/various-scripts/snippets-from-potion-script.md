# Snippets from potion script

```lua
cartonofmilk.click.click1.MouseClick:Connect(function(plr)
	local pot = makebp()
	pot:SetAttribute("type", "water")
	makesurfaces(pot, 0, Color3.fromRGB(0, 109, 225))
	local t = Instance.new("Tool")
	t.Name = "bo'oh'o'wotah"
	pot.Name = "Handle"
	pot.Parent = t
	t.Parent = plr.Backpack
end)

function playpotanim(char, tool)
	if char.Humanoid.RigType ~= Enum.HumanoidRigType.R6 then
		return warn("user is not R6")
	end
	task.spawn(function()
		local s1 = Instance.new("Sound",tool.Handle)
		s1.Volume = 3
		s1.SoundId = "rbxassetid://8857361259"
		s1.TimePosition = 0.85
		s1:Play()
		task.wait(2.017)
		s1:Destroy()
	end)
	local rs = char:FindFirstChild("Right Shoulder",true)
	local w = Instance.new("Weld")
	w.C0 = rs.C0*CFrame.Angles(0,0,math.rad(90))
	w.C1 = rs.C1
	w.Part0 = rs.Part0
	w.Part1 = rs.Part1
	w.Parent = rs.Parent
	tweenlimb(w,CFrame.new(1 + (0),0.5 + (0),0 + (0)) * CFrame.Angles(math.rad(-149 + (0)),math.rad(44 + (0)),math.rad(-113 + (0))),TweenInfo.new(0.2,Enum.EasingStyle.Exponential,Enum.EasingDirection.Out))
	game:GetService("TweenService"):Create(tool,TweenInfo.new(0.2,Enum.EasingStyle.Exponential,Enum.EasingDirection.Out),{Grip = CFrame.Angles(0,math.rad(44),0)}):Play()
	task.wait(0.2)
	for i = 1,7 do
		tweenlimb(w,CFrame.new(1 + (0),0.5 + (0),0 + (0)) * CFrame.Angles(math.rad(-149 + (0)),math.rad(44 + (0)),math.rad(-123 + (0))),TweenInfo.new(0.15,Enum.EasingStyle.Linear))
		task.wait(0.1)
		tweenlimb(w,CFrame.new(1 + (0),0.5 + (0),0 + (0)) * CFrame.Angles(math.rad(-149 + (0)),math.rad(44 + (0)),math.rad(-113 + (0))),TweenInfo.new(0.15,Enum.EasingStyle.Linear))
		task.wait(0.1)
	end
	tool.Grip = CFrame.new()
	w:Destroy()
	tool:Destroy()
end

local t2 = Instance.new("Tool",owner.Backpack)
t2.Name = "head cleaver"
t2.RequiresHandle = false
t2.Activated:Connect(function()
	if t2:FindFirstChild("Handle") then t2.Handle:Destroy() end
	local head = remote1:InvokeClient(owner)
	if head.Name == "Head" then
		local char = head.Parent
		local tors = char:FindFirstChild("Torso") or char:FindFirstChild("UpperTorso")
		local neck = tors:FindFirstChild("Neck") or head:FindFirstChild("Neck")
		local hum = char.Humanoid
		hum.RequiresNeck = false
		neck:Destroy()
		playSound("rbxassetid://"..slashes[math.random(1, #slashes)], tors, 2, rng:NextNumber(0.8, 1.2))
		task.spawn(function()
			local x = tick()
			while true do
				task.wait()
				if tick()-x >= 5 then break end
				local c = Color3.new(0.5, 0, 0)
				if math.random(1, 10)/10 == 0.1 then
					c = head.Color
				end
				Blood:Create((tors.CFrame * CFrame.new(0, tors.Size.Y/2, 0)).Position, rng:NextUnitVector() * 15 + Vector3.new(0, 30, 0), c)
			end
		end)
		head.Name = "Handle"
		head.Parent = t2
		task.spawn(function()
			t2.Parent = owner.Backpack
			task.wait()
			t2.Parent = owner.Character
		end)
	end
end)
```
