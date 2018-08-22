import argparse
import json
import sys

# Parse the arguments expected by this script
parser = argparse.ArgumentParser(description='Process arguments')
parser.add_argument('--testString', required="true", help="Test string")
parser.add_argument('--testArray', nargs='+', required="true", help="A test array")
parser.add_argument('--testFlag', dest='testFlag', action='store_true', help="A test flag")

# All arguments after the "--" are for this script
args = parser.parse_args(sys.argv[sys.argv.index("--") + 1:])

print(json.dumps({
    'testString': args.testString,
    'testArray': args.testArray,
    'testFlag': args.testFlag,
}))
