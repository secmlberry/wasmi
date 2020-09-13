(function() {var implementors = {};
implementors["instantiate"] = [{"text":"impl UnwindSafe for ResolveAll","synthetic":true,"types":[]}];
implementors["num_bigint"] = [{"text":"impl UnwindSafe for ParseBigIntError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BigUint","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BigInt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sign","synthetic":true,"types":[]}];
implementors["num_integer"] = [{"text":"impl&lt;A&gt; UnwindSafe for ExtendedGcd&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for IterBinomial&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T&gt; UnwindSafe for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParseRatioError","synthetic":true,"types":[]}];
implementors["num_traits"] = [{"text":"impl UnwindSafe for ParseFloatError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FloatErrorKind","synthetic":true,"types":[]}];
implementors["parity_wasm"] = [{"text":"impl UnwindSafe for Module","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FunctionSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CodeSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MemorySection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImportSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExportSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GlobalSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ElementSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TableSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CustomSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImportEntry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResizableLimits","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MemoryType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TableType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GlobalType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExportEntry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GlobalEntry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VarUint32","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VarUint7","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Uint8","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VarUint1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VarInt7","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Uint32","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VarInt32","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VarInt64","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Uint64","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VarUint64","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for CountedList&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; !UnwindSafe for CountedWriter&lt;'a, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, T&gt; UnwindSafe for CountedListWriter&lt;I, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FunctionType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Instructions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InitExpr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BrTableData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Func","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FuncBody","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Local","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ElementSegment","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataSegment","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for IndexMap&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NameSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModuleNameSubsection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FunctionNameSubsection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LocalNameSubsection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RelocSection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Unparsed","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImportCountType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Section","synthetic":true,"types":[]},{"text":"impl UnwindSafe for External","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Internal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Type","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ValueType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BlockType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TableElementType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Instruction","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RelocationEntry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for SignatureBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for SignaturesBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for FunctionBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for TypeRefBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for FuncBodyBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FunctionDefinition","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for DataSegmentBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for ExportBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for ExportInternalBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for GlobalBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for ImportBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Identity","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for MemoryBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for ModuleBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for TableBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TableDefinition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TableEntryDefinition","synthetic":true,"types":[]}];
implementors["wasmi"] = [{"text":"impl !UnwindSafe for Trap","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for FuncInstance","synthetic":true,"types":[]},{"text":"impl&lt;'args&gt; !UnwindSafe for FuncInvocation&lt;'args&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for FuncRef","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GlobalInstance","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for GlobalRef","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NopExternals","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for RuntimeArgs&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ImportsBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MemoryInstance","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for MemoryRef","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ModuleInstance","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ModuleRef","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for NotStartedModuleRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for StackRecycler","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TableInstance","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TableRef","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GlobalDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MemoryDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Signature","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TableDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Module","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TrapKind","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ResumableError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ExternVal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ValueType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeValue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for F32","synthetic":true,"types":[]},{"text":"impl UnwindSafe for F64","synthetic":true,"types":[]}];
implementors["wasmi_validation"] = [{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PlainValidator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PlainFuncValidator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for StackWithLimit&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModuleContext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModuleContextBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BlockFrame","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for FunctionValidationContext&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StartedWith","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StackValueType","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Locals&lt;'a&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()