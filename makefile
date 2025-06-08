run:
	npx next dev --experimental-https

build:
	npm run build

c:
	@read -p "Commit: " msg; \
	git commit -m "$$msg"

p:
	git push

pl:
	git pull

main:
	git checkout main

s:
	git stash

sp:
	git stash pop