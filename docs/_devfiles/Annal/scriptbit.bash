#! /bin/bash
#set +x

function exitscript() { exit; }

for var in content page paginator site
do
	echo -e "<hr><hr><hr><hr>"
	echo -e "{{%raw%}}{{${var}}}{{%endraw%}}:"
	echo -e "<hr><hr><hr>"
	echo -e "{{%raw%}}{{${var}}}{{%endraw%}} = \`{{${var}}}\`"
	echo -e "{%for element in ${var} %}"
	echo -e "\t<hr><hr>"
	echo -e "\t{{%raw}}{{${var}.{{element}}{{%endraw%}} = \`{{${var}.{{element}}}}\`"
	echo -e "\t<hr>"
	echo -e "\t{{%raw}}{{${var}.{{element[0]}}}}{{%endraw%}} = \`{{${var}.{{element[1]}}}}\`"
	echo -e "{%endfor%}"
done









exitscript
echo '------------------------------'

for collection in a b c ; do
	echo '<hr><hr><hr>'
	echo ${collection}:
	for element in aa bb cc ; do
		echo '<hr><hr>'
		echo "{{%raw}}${collection}.${element}{{%endraw%}} = \`${collection}.${element}\`"
		echo '<hr>'
		echo "{{%raw}}${collection}.${element}[0]{{%endraw%}} = \`${collection}.${element}[0]\`"
		echo "{{%raw}}${collection}.${element}[1]{{%endraw%}} = \`${collection}.${element}[1]\`"
	done
done

echo '------------------------------'

exitscript


this is garbage